const services = require('../../services');

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

module.exports = {
  topPriceGet,
  topPricePost
};
