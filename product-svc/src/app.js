const express = require('express');
const orderRouter = require('./products');

const app = express();

//use router pattern
app.use('/products', orderRouter);

module.exports = app;