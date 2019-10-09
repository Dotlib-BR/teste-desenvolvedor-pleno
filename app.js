//Modulos necessarios
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Settings
const app = express();
const db = mongoose.connect('mongodb://localhost/todoAPI');
const port = process.env.PORT || 3000;
const Todo = require('./models/todoModel');
const todoRouter = require('./routers/todoRouter')(Todo);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', todoRouter);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
