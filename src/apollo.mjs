import Apollo from "apollo-server";
import config from "./config";

import { typeDefs } from "./schema";

const { ApolloServer } = Apollo;
const { API_URL } = config;

const apollo = new ApolloServer({
  typeDefs,
  playground: {
    endpoint: `${API_URL}/graphql`,
    settings: { "editor.theme": "dark" }
  }
});

apollo.listen().then(({ url }) => {
  console.log({ message: `Server is running on ${url}` });
});
