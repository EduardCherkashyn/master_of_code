const services = require('../../services');

function discountPromiseGet(req, res) {
  res.setHeader('Content-Type', 'application/json');
  services.discountPromiseGet(res);
}

function discountPromisePost(req, res) {
  res.setHeader('Content-Type', 'application/json');
  services.discountPromisePost(req, res);
}

function discountPromisifyGet(req, res) {
  res.setHeader('Content-Type', 'application/json');
  services.discountPromiseGet(res);
}

function discountPromisifyPost(req, res) {
  res.setHeader('Content-Type', 'application/json');
  services.discountPromisePost(req, res);
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
  discountPromisifyGet,
  discountPromisifyPost,
  discountAsyncGet,
  discountAsyncPost
};
