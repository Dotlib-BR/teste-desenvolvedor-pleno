import { Router } from 'express'
import TodoService from './services/todos'

const routes = new Router()
const todoService = new TodoService()


routes.get('/todos', async (req, res) => {
    const todos = await todoService.find(req.query)

    res.json(todos)
})

routes.get('/todos/:id', async (req, res) => {
    const todo = await todoService.get(req.params.id)

    if (!todo) res.status(404).send({
        status: 404,
        message: "Lista de tarefas não encontrada"
    })

    res.json(todo)
})

routes.post('/todos', async (req, res) => {
    const todo = await todoService.create(req.body)

    res.json(todo)
})

routes.put('/todos/:id', async (req, res) => {
    const todo = await todoService.update(
        req.params.id,
        req.body
    )

    res.json(todo)
})

routes.patch('/todos/:id', async (req, res) => {
    const todo = await todoService.patch(
        req.params.id,
        req.body
    )

    res.json(todo)
})

routes.delete('/todos/:id', async (req, res) => {
    const todo = await todoService.remove(req.params.id)

    res.json(todo)
})

export default routes