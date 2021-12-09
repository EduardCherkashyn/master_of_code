const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');

const filter = require('./routes/filter');
const topPrice = require('./routes/topPrice');
const commonPrice = require('./routes/commonPrice');
const discount = require('./routes/discount');
const data = require('./routes/data');
const { errorHandler } = require('./middlewares');

const app = express();

app.use(basicAuth({
  users: { 'Masters': 'Academy'}
}));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/filter', filter);
app.use('/topprice', topPrice);
app.use('/commonprice', commonPrice);
app.use('/discount', discount);
app.use('/data', data);
app.use(errorHandler);

module.exports = app;
