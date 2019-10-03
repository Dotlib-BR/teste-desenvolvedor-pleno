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
const find = async (request, h) => {
  const todo = await TodoModel.findById(request.params.id)
  return {data: transformer(todo)}
}

const save  = async (request, h) => {
  const { name } = request.payload
  const todo = new TodoModel
  todo.name = name
  await todo.save()

  return h.response(transformer(todo)).code(201)
}

const remove  = async (request, h) => {
  await TodoModel.findByIdAndDelete({ _id: request.params.id})
  return h.response().code(204)
}
const update  = async (request, h) => {
  await TodoModel.findByIdAndUpdate({ _id: request.params.id}, {name: request.payload.name})
  return h.response().code(204)
}

module.exports = {
  getAll,
  find,
  save,
  remove,
  update
}
