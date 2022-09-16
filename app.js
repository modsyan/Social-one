const morgan = require('morgan');
const app = require('express').express();
const UserRouter = require('./routes/userRoute');

// [1] midddlewares
app.use(morgan('dev'));
app.use(console.log('sent at', new Date().toISOString));

// [2] routes

// used middleware as a director from outer vision and route from scope vision
// app.route('/url-to-dircet', router)
app.route('/api/v1/users/', UserRouter); // users -> me


module.exports = app;
