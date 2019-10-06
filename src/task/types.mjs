import * as ApolloServer from "apollo-server";

const gql = "gql" in ApolloServer ? ApolloServer.gql : ApolloServer.default.gql;

const Task = gql`
  extend type Query {
    task(id: Int, name: String): Task
    tasks(offset: Int, limit: Int): Tasks
  }

  type Tasks {
    list: [Task]
  }

  type Task {
    id: Int!
    name: String!
  }
`;

export default Task;
