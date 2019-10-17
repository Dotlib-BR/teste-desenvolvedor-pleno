require('dotenv').config();

const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(require('./routes'));

require('./app/controllers/todoController.js')(app);

app.listen(process.env.PORT || 3333);
