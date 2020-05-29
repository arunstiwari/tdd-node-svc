const express = require('express');
const cors = require('cors');
const customerRouter = require('./customers');
const app = express();
app.use(cors());
//routers and middlewares
app.use('/customers', customerRouter);
app.use('/', (req,res) => {
    res.status(200).send('Customer service is running');
})

module.exports = app;