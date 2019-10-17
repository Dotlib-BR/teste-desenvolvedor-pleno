const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
