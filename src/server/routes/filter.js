const express = require('express');
const controllers = require('../controllers');

const filter = express.Router();

filter.get('/', (req, res) => {
  controllers.filterGet(req, res);
});

filter.post('/', (req, res) => {
  controllers.filterPost(req, res);
});

module.exports = filter;
