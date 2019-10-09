const express = require('express');

function routes(Todo) {
    const todoRouter = express.Router();
    //Rota para todos os todo's (Com metodos get e post)
    todoRouter.route('/todos')
        .post((req, res) => {
            if (req.body.task && req.body.person && req.body.date) {
                const todo = new Todo(req.body);

                todo.save();
                return res.status(201).json(todo);
            }
            return res.sendStatus(400);
        })
        .get((req, res) => {
            const query = {};
            if (req.query.done) {
                query.done = req.query.done;
            }
            Todo.find(query, (err, todos) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(todos);
            });
        });
    //Middleware para interceptar a requisição e tratar antes de ir para a rota /todos/:todoID
    todoRouter.use('/todos/:todoID', (req, res, next) => {
        Todo.findById(req.params.todoID, (err, todo) => {
            if (err) {
                return res.send(err);
            }
            if (todo) {
                req.todo = todo;
                return next();
            }
            return res.sendStatus(404);
        });
    });
    //Rota um todo's (Com metodos get, put, patch e delete)
    todoRouter.route('/todos/:todoID')
        .get((req, res) => {
            return res.json(req.todo);
        })
        .put((req, res) => {
            const { todo } = req;
            todo.task = req.body.task;
            todo.person = req.body.person;
            todo.date = req.body.date;
            todo.done = req.body.done;
            todo.save((err) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(todo);
            });
        });

    return todoRouter;
}

module.exports = routes;