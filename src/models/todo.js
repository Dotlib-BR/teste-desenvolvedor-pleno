import { model, Schema } from 'mongoose'

const taskSchema = new Schema ({
    name: String,
    complete: Boolean
})

const todoSchema = new Schema (
    {
        name: String,
        tasks: [ taskSchema ]
    }
)

const todoModel = model('Todo', todoSchema)

export default todoModel