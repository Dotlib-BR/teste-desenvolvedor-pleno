const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo');

router.get('/', async (req,res) => {

    let { page, size } = req.query;
    ( !page ) ? page = 1 : null;
    ( !size ) ? size = 10 : null;
    
    const skip = size * (page-1);
    const limit = Number(size);

    try {
        const total = await Todo.countDocuments();
        const Todos = await Todo.find(null,null,{ skip }).limit(limit);
        const paginas = Math.ceil(total / limit);
        return res.send({ Todos, total, paginas });
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Erro ao carregar os tarefas' });
    }
});

router.get('/:id', async (req,res) => {
   
    try {
        const todo = await Todo.findById(req.params.id);
        return res.send({ todo });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao carregar a tarefa' });
    }

});

router.post('/', async (req,res) => {

    try {
        const todo = await Todo.create({ ...req.body });
        return res.send({ todo });
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Erro ao criar uma nova tarefa' });
    }

});

router.put('/:id', async (req,res) => {

    try {
        const { titulo, responsavel, tarefa } = req.body;
        const todo = await Todo.findByIdAndUpdate(req.params.id,{ titulo, responsavel, tarefa }, { new: true });
        await todo.save();
        return res.send({ todo });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao atualizar a tarefa' });
    }

});

router.delete('/:id', async (req,res) => {
    
    try {
        await Todo.findByIdAndRemove(req.params.id);
        return res.send({ msg: 'Todo removido com sucesso'});
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao deletar o Todo' });
    }

});

module.exports = app => app.use('/todos', router );
