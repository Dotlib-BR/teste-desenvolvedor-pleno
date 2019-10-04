const todosHandler = require("./handlers/todos");
const Joi = require('@hapi/joi');

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
    handler: todosHandler.save,
    options: {
      validate: {
          payload: {
              name: Joi.string().min(1).max(140)
          }
      }
    }
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
