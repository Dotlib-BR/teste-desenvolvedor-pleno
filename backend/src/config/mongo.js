const mongoose = require('mongoose');
//TODO
//Usar variável do env para evitar repetição
mongoose
    .connect(
        'mongodb://mongo:27017/docker-api',
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(() => {
        mongoose.connect('mongodb://127.0.0.1:27017/docker-api',
            { useNewUrlParser: true }
        ).then(() => console.log('MongoDB Connected'))
            .catch(err => console.log(err));
    });