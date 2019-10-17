const app = require('./app');

app.listen(process.env.port || 3000, () => console.log('Server running...'));
