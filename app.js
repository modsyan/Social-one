const express = require('express');
const morgan = require('morgan');

const userController = require('./controller/userController');
const app = express();

// [1] midddlewares
app.use(morgan('dev'));
app.use(console.log(`sent at: ${new Date().toISOString}`));

// [2] routes

app.route('/api/v1/register/');
app.route('/api/v1/login/');
app.route('/api/v1/home/');
app.route('/api/v1/users/'); // users -> me

module.exports = app;
