const express = require('express');
const controllers = require('../controllers');

const filter = express.Router();

filter.get('/promise', (req, res) => {
  controllers.discountPromiseGet(req, res);
});

filter.post('/promise', (req, res) => {
  controllers.discountPromisePost(req, res);
});

filter.get('/promisify', (req, res) => {
  controllers.discountPromisifyGet(req, res);
});

filter.post('/promisify', (req, res) => {
  controllers.discountPromisifyPost(req, res);
});

filter.get('/async', (req, res) => {
  controllers.discountAsyncGet(req, res);
});

filter.post('/async', (req, res) => {
  controllers.discountAsyncPost(req, res);
});

module.exports = filter;
