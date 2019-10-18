const express = require('express');
const cors    = require('cors');

class AppController {
    constructor() {
        this.express = express();
        
        this.middlewares();
        this.routes();
        this.banco();
    }

    banco() {
        require('./config/mongo');
    }

    middlewares() {
        this.express.use(cors());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(express.json());
    }

    routes() {
        this.express.use('/todo', require('./routes'))
    }
}

module.exports = new AppController().express