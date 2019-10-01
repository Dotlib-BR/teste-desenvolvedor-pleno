import * as ApolloServer from "apollo-server";
import GraphQLJSON from "graphql-type-json";
import merge from "lodash/merge";
import Tasks from "./task/types";

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

export const typeDefs = [Tasks, Query];

export default {
  typeDefs
};
