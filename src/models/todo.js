const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  name: String
})

module.exports = mongoose.model('Todo', TodoSchema)