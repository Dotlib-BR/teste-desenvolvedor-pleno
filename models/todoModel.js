const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoModel = new Schema(
    {
        task: { type: String },
        person: { type: String },
        date: { type: Date },
        done: { type: Boolean, default: false }
    }
);

module.exports = mongoose.model('Todo', todoModel);