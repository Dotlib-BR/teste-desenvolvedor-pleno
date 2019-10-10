const config = require("./src/config");

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } = config;

module.exports = {
  development: {
    client: "mysql",
    connection: {
      user: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      host: "127.0.0.1",
      port: DB_PORT
    },
    migrations: { tableName: "knex_migrations" },
    pool: {
      min: 2,
      max: 10
    }
  }
};
