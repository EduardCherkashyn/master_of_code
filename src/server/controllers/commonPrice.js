const services = require('../../services');

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

module.exports = {
  commonPriceGet,
  commonPricePost
};
