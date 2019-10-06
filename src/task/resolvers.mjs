import * as ApolloServer from "apollo-server";

const { UserInputError } =
  "UserInputError" in ApolloServer ? ApolloServer : ApolloServer.default;

export const resolvers = {
  Query: {
    task: async (_, { id }, { loaders }) => {
      const taskResult = loaders.task.getById.load({ id });

      console.log({
        data: taskResult,
        message: "get task by id",
        query: "task"
      });

      return taskResult;
    },

    tasks: async (_, { offset = 0, limit = 100 }, { loaders }) => {
      const taskResult = await loaders.task.getAll.load({ offset, limit });

      console.log({
        data: taskResult,
        message: "get all tasks ",
        query: "tasks"
      });

      return taskResult;
    }
  },

  Mutation: {
    createTask: async (_, { task }, { datasource }) => {
      const taskResult = await datasource.task.create(task);

      console.log({
        data: taskResult,
        message: "create new task",
        query: "createTask"
      });

      return taskResult;
    },

    updateTask: async (_, { task }, { datasource }) => {
      const taskResult = await datasource.task.update(task);

      if ("errors" in taskResult) {
        throw new UserInputError("Validation error", {
          validationErrors: taskResult.errors
        });
      }

      console.log({
        data: taskResult,
        message: "update task",
        query: "updateTask"
      });

      return taskResult;
    },

    deleteTask: async (_, { id }, { datasource }) => {
      const taskResult = await datasource.task.delete(id);

      if (typeof taskResult === "object" && "errors" in taskResult) {
        throw new UserInputError("Validation error", {
          validationErrors: taskResult.errors
        });
      }

      console.log({
        data: taskResult,
        message: "delete task by id",
        query: "deleteTask"
      });

      return taskResult;
    }
  }
};

export default { resolvers };
