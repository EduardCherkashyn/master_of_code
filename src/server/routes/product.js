const express = require('express');
const controllers = require('../controllers');

const product = express.Router();

product.get('/:id', (req, res) => {
  controllers.productGet(req, res);
});

product.post('/', (req, res) => {
  controllers.productPost(req, res);
});

product.put('/', (req, res) => {
  controllers.productPut(req, res);
});

product.delete('/:id', (req, res) => {
  controllers.productDelete(req, res);
});

module.exports = product;
