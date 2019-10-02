const todosHandler = require("./handlers/todos");

module.exports = [
  {
    method: "GET",
    path: "/api/v1/todos",
    handler: todosHandler.getAll
  },
  {
    method: "POST",
    path: "/api/v1/todos",
    handler: todosHandler.save
  }
];
