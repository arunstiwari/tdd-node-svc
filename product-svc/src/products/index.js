const express = require('express');
const ProductController = require('./product.controller');
const ProductService = require('./product.service');
const ProductRepository = require('./product.repository');
const router = express.Router();

//let us use controller pattern
const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

router.get('/', productController.fetchAllProducts);


module.exports = router;