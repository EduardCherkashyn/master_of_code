const express = require('express');
const controllers = require('../controllers');

const product = express.Router();

product.get('/', controllers.productGetAll);
product.get('/:id', controllers.productGet);
product.post('/', controllers.productPost);
product.put('/:id', controllers.productPut);
product.delete('/:id', controllers.productDelete);

module.exports = product;
