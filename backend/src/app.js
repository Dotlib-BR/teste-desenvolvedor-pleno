const express = require('express');

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
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(express.json());
    }

    routes() {
        this.express.use('/todo', require('./routes'))
    }
}

module.exports = new AppController().express