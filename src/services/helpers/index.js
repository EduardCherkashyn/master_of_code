const constants = require('../../constants');
const filterHelper = require('./helper1');
const highestPriceHelper = require('./helper2');
const addingTotalPriceHelper = require('./helper3');
const discountPromise = require('./helperDiscountPromise');
const discountPromisify = require('./helperDiscountPromisify');
const discountAsync = require('./helperDiscountAsync');

const items = constants.productItems;

module.exports = {
  filterHelper,
  highestPriceHelper,
  addingTotalPriceHelper,
  discountPromise,
  discountPromisify,
  discountAsync,
  items
};
