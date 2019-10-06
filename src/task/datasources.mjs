import getConnection from "../core/services/database.mjs";

const config = {
  connection: getConnection(),
  tableName: "tasks"
};

export const TaskDatasource = ({ connection, tableName } = config) => ({
  getById: async id => {
    const task = {
      id: 1,
      name: "Mocked Task"
    };

    const [taskResult] = await connection
      .select()
      .from(tableName)
      .where("id", id);

    return JSON.parse(JSON.stringify(taskResult));
  },

  getAll: async ({ offset, limit }) => {
    const taskResult = await connection
      .select()
      .from(tableName)
      .offset(offset)
      .limit(limit);

    return {
      list: JSON.parse(JSON.stringify(taskResult))
    };
  }
});

export default TaskDatasource;
