const TodoModel = require('../models/todo')

const transformer =  todoResponse => ({
  type: 'todos',
  id: todoResponse.id,
  attributes: {
    name: todoResponse.name
  },
  links: {
    self: `/api/v1/todos/${todoResponse.id}`
  }
})

const getAll = async (request, h) => {
  const todos = await TodoModel.find({})
  return { data: todos.map(transformer) }
}

const save  = async (request, h) => {
  const { name } = request.payload
  const todo = new TodoModel
  todo.name = name
  await todo.save()

  return h.response(transformer(todo)).code(201)
}

module.exports = {
  getAll,
  save
}