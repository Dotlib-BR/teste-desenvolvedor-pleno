/**
 * Proxy entre API pública e API do banco de dados
 * 
 * O serviço serve como um proxy RESTful para a api
 * do banco de dados.
 */

import todo from '../models/todo'

class TodoService {
    async find (params) {
        return todo.find(params)
    }

    async get (id) {
        return todo.findById(id)
    }

    async create (data) {
        const res = await todo.create(data)
        
        return res;
    }

    async update (id, data) {
        await todo.findByIdAndUpdate(id, data, {
            overwrite: true
        })
        
        return todo.findById(id)
    }

    async patch (id, data) {
        await todo.findByIdAndUpdate(id, data)
        
        return todo.findById(id)
    }

    async remove (id) {
        return todo.findById(id).remove().exec()
    }
}

export default TodoService