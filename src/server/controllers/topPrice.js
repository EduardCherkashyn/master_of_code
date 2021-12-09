const services = require('../../services');

async function topPriceGet(req, res) {
  const { message, code } = await services.topPriceGet();
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(message));
  res.end();
}

async function topPricePost(req, res) {
  const { message, code } = await services.topPricePost(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(message));
  res.end();
}

module.exports = {
  topPriceGet,
  topPricePost
};
