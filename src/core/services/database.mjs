import knex from "knex";
import config from "../../config";

const env = config[config.NODE_ENV];

const getConnection = () => {
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

export default getConnection;
