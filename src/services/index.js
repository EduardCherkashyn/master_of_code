const { filter: filterGet } = require('./filters/get');
const { filter: filterPost } = require('./filters/post');
const { topPriceGet, topPricePost } = require('./topPrice');
const { commonPriceGet, commonPricePost } = require('./commonPrice');
const dataOverride = require('./dataOverride');
const {
  discountPromiseGet,
  discountPromisePost
} = require('./discountPromise');
const {
  discountPromisifyGet,
  discountPromisifyPost
} = require('./discountPromisify');
const {
  discountAsyncGet,
  discountAsyncPost
} = require('./discountAsync');

function notFound() {
  return {
    code: 404,
    message: 'page not found',
  };
}

module.exports = {
  filterGet,
  filterPost,
  topPriceGet,
  topPricePost,
  commonPriceGet,
  commonPricePost,
  dataOverride,
  discountPromiseGet,
  discountPromisePost,
  discountPromisifyGet,
  discountPromisifyPost,
  discountAsyncGet,
  discountAsyncPost,
  notFound
};
