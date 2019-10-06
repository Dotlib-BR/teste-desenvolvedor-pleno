import * as ApolloServer from "apollo-server";
import GraphQLJSON from "graphql-type-json";
import merge from "lodash/merge";

// CORE
import getConnection from "./core/services/database";

// RESOLVERS
import { resolvers as taskResolvers } from "./task/resolvers";

// TYPES
import Task from "./task/types";

// DATASOURCES
import TaskDatasource from "./task/datasources.mjs";
import TaskLoader from "./task/loaders.mjs";

const gql = "gql" in ApolloServer ? ApolloServer.gql : ApolloServer.default.gql;

const Query = gql`
  scalar DateTime
  scalar JSON

  directive @AuthUser on FIELD_DEFINITION

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export const typeDefs = [Task, Query];

export const resolvers = merge({ JSON: GraphQLJSON }, taskResolvers);

export const mountLoaders = datasource => ({
  task: new TaskLoader(datasource.task)
});

export const mountDatasource = () => ({
  task: TaskDatasource()
});

export async function buildContext({ req }) {
  const datasource = mountDatasource();
  const loaders = mountLoaders(datasource);

  return {
    loaders,
    datasource,
    db: getConnection(),
    headers: req.headers
  };
}

export default {
  resolvers,
  typeDefs,
  buildContext
};
