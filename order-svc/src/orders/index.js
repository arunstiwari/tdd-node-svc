const express = require('express');
const OrderController = require('./order.controller');
const OrderService = require('./order.service');

const orderService = new OrderService();
const orderController = new OrderController(orderService);
const router = express.Router();

//use controller to get the data from the service
router.get('/', orderController.fetchAllOrders );
router.post('/', orderController.createNewOrder);

module.exports = router;