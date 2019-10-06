export const resolvers = {
  Query: {
    task: async (_, { id }, { loaders }, info) => {
      const taskResult = loaders.task.getById.load({ id });

      console.log({
        data: taskResult,
        message: "get task by id",
        query: "task"
      });

      return taskResult;
    },

    tasks: async (_, { offset = 0, limit = 100 }, { loaders }, info) => {
      const taskResult = await loaders.task.getAll.load({ offset, limit });

      console.log({
        data: taskResult,
        message: "get all tasks ",
        query: "tasks"
      });

      return taskResult;
    }
  }
};

export default { resolvers };
