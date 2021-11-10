const services = require('../services');

function filterGet(req, res) {
  const { responseData, code } = services.filterGet(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(responseData));
  res.end();
}

function filterPost(req, res) {
  const { responseData, code } = services.filterPost(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(responseData));
  res.end();
}

function topPriceGet(req, res) {
  const { message, code } = services.topPriceGet();
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(message));
  res.end();
}

function topPricePost(req, res) {
  const { message, code } = services.topPricePost(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(message));
  res.end();
}

function commonPriceGet(req, res) {
  const { message, code } = services.commonPriceGet(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(message));
  res.end();
}

function commonPricePost(req, res) {
  const { message, code } = services.commonPricePost(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(message));
  res.end();
}

function dataOverride(req, res) {
  const { message, code } = services.dataOverride(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(message));
  res.end();
}

function notFound(req, res) {
  const { message, code } = services.notFound();
  res.statusCode = code;
  res.write(message);
  res.end();
}

module.exports = {
  filterGet,
  filterPost,
  topPriceGet,
  topPricePost,
  commonPriceGet,
  commonPricePost,
  dataOverride,
  notFound,
};
