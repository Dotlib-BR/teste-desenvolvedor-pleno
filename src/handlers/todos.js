const TodoModel = require('../models/todo')

const getAll  = (request, h) => {
  return 'Olá Programador!!!'
}

const save  = async (request, h) => {
  const { name } = request.payload

  const todo = new TodoModel
  todo.name = name
  
  await todo.save()

  todoResponse = {
    type: 'todos',
    id: todo.id,
    attributes: {
      name: todo.name
    },
    links: {
      self: `/api/v1/todos/${todo.id}`
    }
  }
  return h.response(todoResponse).code(201)
}

module.exports = {
  getAll,
  save
}