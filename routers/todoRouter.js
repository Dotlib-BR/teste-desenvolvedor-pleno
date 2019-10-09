const express = require('express');

function routes(Todo) {
    const todoRouter = express.Router();

    todoRouter.route('/todos')
        .get((req, res) => {
            const query = {};
            if (req.query.done) {
                query.done = req.query.done;
            }
            Todo.find(query, (err, todos) => {
                if (err){
                  return res.send(err);
                }
                return res.json(todos);
            });
        });

    return todoRouter;
}

module.exports = routes;