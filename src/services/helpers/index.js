const itemsProvider = require('../../itemsProvider');
const filterHelper = require('./helper1');
const highestPriceHelper = require('./helper2');
const addingTotalPriceHelper = require('./helper3');
const discountPromise = require('./helperDiscountPromise');
const discountPromisify = require('./helperDiscountPromisify');
const discountAsync = require('./helperDiscountAsync');

const items = itemsProvider.getItems;

module.exports = {
  filterHelper,
  highestPriceHelper,
  addingTotalPriceHelper,
  discountPromise,
  discountPromisify,
  discountAsync,
  items
};
