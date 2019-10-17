const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb://mongo:27017/docker-api',
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));