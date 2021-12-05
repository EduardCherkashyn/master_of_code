const services = require('../../services');
const {
  discountPromiseGet,
  discountPromisePost,
  discountPromisifyGet,
  discountPromisifyPost,
  discountAsyncGet,
  discountAsyncPost
} = require('./discount');
const { topPriceGet, topPricePost } = require('./topPrice');
const { filterGet, filterPost } = require('./filters');
const { commonPriceGet, commonPricePost } = require('./commonPrice');

function dataOverride(req, res) {
  const { message, code } = services.dataOverride(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(message));
  res.end();
}

async function dataUploadCsv(req, res) {
  const { code } = await services.dataUploadCsv(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify('Upload was successfull!'));
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
  dataUploadCsv,
  discountPromiseGet,
  discountPromisePost,
  discountPromisifyGet,
  discountPromisifyPost,
  discountAsyncGet,
  discountAsyncPost,
  notFound,
};
