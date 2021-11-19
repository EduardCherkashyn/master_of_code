const services = require('../../services');

function discountPromiseGet(req, res) {
  services.discountPromiseGet()
    .then(data => {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.write(JSON.stringify(data));
      res.end();
  });
}

function discountPromisePost(req, res) {
  res.setHeader('Content-Type', 'application/json');
  services.discountPromisePost(req)
    .then((data) => {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.write(JSON.stringify(data));
      res.end();
    })
    .catch((err) => {
      res.statusCode = 400;
      res.write(JSON.stringify(err.message));
      res.end();
    });
}

function discountPromisifyGet(req, res) {
  services.discountPromisifyGet()
    .then((data) => {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.write(JSON.stringify(data));
      res.end();
  });
}

function discountPromisifyPost(req, res) {
  res.setHeader('Content-Type', 'application/json');
  services.discountPromisifyPost(req)
    .then((data) => {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.write(JSON.stringify(data));
      res.end();
    })
    .catch((err) => {
      res.statusCode = 400;
      res.write(JSON.stringify(err.message));
      res.end();
    });
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
