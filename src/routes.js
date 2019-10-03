const todosHandler = require("./handlers/todos");

module.exports = [
  {
    method: "GET",
    path: "/api/v1/todos",
    handler: todosHandler.getAll
  },
  {
    method: "GET",
    path: "/api/v1/todos/{id}",
    handler: todosHandler.find
  },
  {
    method: "POST",
    path: "/api/v1/todos",
    handler: todosHandler.save
  },
  {
    method: "DELETE",
    path: "/api/v1/todos/{id}",
    handler: todosHandler.remove
  },
  {
    method: "PUT",
    path: "/api/v1/todos/{id}",
    handler: todosHandler.update
  }    
];
