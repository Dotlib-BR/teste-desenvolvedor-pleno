const express = require('express');

function routes(Todo) {
    const todoRouter = express.Router();

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

    return todoRouter;
}

module.exports = routes;