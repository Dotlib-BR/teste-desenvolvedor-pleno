import Apollo from "apollo-server";
import config from "./config";

import { typeDefs, resolvers, buildContext } from "./schema.mjs";

const { ApolloServer } = Apollo;
const { API_URL } = config;

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context: buildContext,
  playground: {
    endpoint: `${API_URL}/graphql`,
    settings: { "editor.theme": "dark" }
  }
});

apollo.listen().then(({ url }) => {
  console.log({ message: `Server is running on ${url}` });
});
