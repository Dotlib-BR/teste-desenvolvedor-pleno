const mongoose = require('../../database');

const TodoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        description: 'Nome que descreva a tarefa'
    },
    responsavel: {
        type: String,
        required: true,
        description: 'Nome de quem será responsável pela tarefa'
    },
    tarefa:{
        type: String,
        required: true,
        description: 'Descrição da tarefa que será executada'
    },
    created:{
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Todo', TodoSchema);
