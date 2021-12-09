const express = require('express');
const controllers = require('../controllers');

const topPrice = express.Router();

topPrice.get('/', (req, res) => {
  controllers.topPriceGet(req, res);
});

topPrice.post('/', (req, res) => {
  controllers.topPricePost(req, res);
});

module.exports = topPrice;
