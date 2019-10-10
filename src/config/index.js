const {
  NODE_ENV = "development",
  API_URL = "http://localhost:4000",
  DB_USERNAME = "root",
  DB_PASSWORD = "root",
  DB_NAME = "local",
  DB_HOST = "mysql",
  DB_PORT = "3306"
} = process.env;

const config = {
  NODE_ENV,
  API_URL,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_PORT,

  [NODE_ENV]: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
    logging: false,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    define: {
      timestamps: true,
      underscored: true,
      charset: "utf8",
      paranoid: true
    }
  }
};

module.exports = config;
