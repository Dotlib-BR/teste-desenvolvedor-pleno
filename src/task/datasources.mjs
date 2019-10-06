import getConnection from "../core/services/database.mjs";

const config = {
  connection: getConnection(),
  tableName: "tasks"
};

export const TaskDatasource = ({ connection, tableName } = config) => ({
  getById: async id => {
    const [taskResult] = await connection
      .select()
      .from(tableName)
      .where("id", id)
      .whereNull("deleted_at");

    return taskResult;
  },

  getAll: async ({ offset, limit }) => {
    const taskResult = await connection
      .select()
      .from(tableName)
      .whereNull("deleted_at")
      .offset(offset)
      .limit(limit);

    return {
      list: taskResult
    };
  },

  create: async task => {
    const [newTaskId = null] = await connection.insert(task).into(tableName);

    return {
      id: newTaskId,
      ...task
    };
  },

  update: async task => {
    const databaseTask = await connection
      .select()
      .from(tableName)
      .where("id", task.id)
      .whereNull("deleted_at");

    if (!databaseTask) {
      return { errors: ["Task does not exists on database"] };
    }

    try {
      const updatedTask = await connection(tableName)
        .where("id", task.id)
        .update(task);

      return updatedTask ? task : { errors: "Cannot update task" };
    } catch (e) {
      return { errors: e.sqlMessage };
    }
  },

  delete: async id => {
    const deletedTask = await connection(tableName)
      .where("id", id)
      .update("deleted_at", new Date());

    return deletedTask;
  }
});

export default TaskDatasource;
