const routes = require('express').Router();
const mongoose = require('mongoose');
const Todo = require('./models/Todo');

routes.get('/index', (req, res) => {
    Todo.find()
        .then(todos => res.status(200).json(todos))
        .catch(err => res.status(400).json({ msg: err }));
});

routes.get('/show/:id', (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);

    Todo.findById(id)
        .then(todos => res.status(200).json(todos))
        .catch(err => res.status(404).json({ msg: 'Todo not found' }));
});

routes.post('/store', (req, res) => {
    const newTodo = new Todo({
        name: req.body.name
    });

    newTodo.save()
        .then(todo => res.status(201).json(todo))
        .catch(err => res.status(400).json({ msg: err }));
});

routes.delete('/delete/:id', async (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);

    Todo.findByIdAndDelete({ _id: id })
        .then(() => res.status(204).json({ msg: 'No content' }))
        .catch(err => res.status(400).json({ msg: err }));
});

routes.put('/update/:id', (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);

    Todo.findByIdAndUpdate({ _id: id }, { name: req.body.name })
        .then(async (todo) => {
            todo = await Todo.findById(id);
            res.status(201).json(todo)
        })
        .catch(err => res.status(400).json({ msg: err }))
})

module.exports = routes;