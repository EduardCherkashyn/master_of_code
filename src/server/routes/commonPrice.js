const express = require('express');
const controllers = require('../controllers');

const filter = express.Router();

filter.get('/', (req, res) => {
  controllers.commonPriceGet(req, res);
});

filter.post('/', (req, res) => {
  controllers.commonPricePost(req, res);
});

module.exports = filter;
