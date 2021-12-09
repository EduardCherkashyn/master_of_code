const express = require('express');
const controllers = require('../controllers');

const filter = express.Router();

filter.post('/', (req, res) => {
  controllers.dataOverride(req, res);
});

filter.put('/', (req, res) => {
  controllers.dataUploadCsv(req, res);
});

module.exports = filter;
