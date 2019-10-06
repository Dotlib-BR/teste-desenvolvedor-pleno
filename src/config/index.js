const {
  NODE_ENV = "development",
  API_URL = "http://localhost:4000",
  DB_USERNAME = "root",
  DB_PASSWORD = "",
  DB_NAME = "Local",
  DB_HOST = "127.0.0.1"
} = process.env;

const config = {
  NODE_ENV,
  API_URL,

  [NODE_ENV]: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
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
