const app = require('./app');

app.listen(process.env.port || 4000, () => console.log('Server running...'));
