import knex from "knex";
import config from "../../config";
import { memoize } from "../helpers/functional.mjs";

const env = config[config.NODE_ENV];

const connect = () => {
  const connection = knex({
    client: "mysql",
    connection: {
      host: env.host,
      database: env.database,
      user: env.username,
      password: env.password
    },
    migrations: { tableName: "migrations" }
  });
  return connection;
};

const getConnection = memoize(connect);

export default getConnection;
