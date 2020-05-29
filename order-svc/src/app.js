const express = require('express');
const orderRouter = require('./orders');
const app = express();

app.use(express.json());
//use router pattern
app.use('/orders', orderRouter);

//middlewares
//routers

module.exports = app;