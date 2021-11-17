const services = require('../../services');

function discountPromiseGet(req, res) {
  const { message, code } = services.discountPromiseGet();
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(message));
  res.end();
}

function discountPromisePost(req, res) {
  const { message, code } = services.discountPromisePost();
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(message));
  res.end();
}

async function discountAsyncGet(req, res) {
  const { message, code } = await services.discountAsyncGet();
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(message));
  res.end();
}

async function discountAsyncPost(req, res) {
  const { message, code } = await services.discountAsyncPost(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(message));
  res.end();
}

module.exports = {
  discountPromiseGet,
  discountPromisePost,
  discountAsyncGet,
  discountAsyncPost
};
