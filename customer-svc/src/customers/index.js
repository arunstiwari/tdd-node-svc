const express = require('express');
const router = express.Router();
const CustomerController = require('./customer.controller');
const CustomerService = require('./customer.service');

const customerService = new CustomerService();
const customerController = new CustomerController(customerService);

router.post('/', customerController.createCustomer)

module.exports = router;