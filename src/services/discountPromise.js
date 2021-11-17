const itemsValidator = require('./validators/itemsValidator');
const helpers = require('./helpers');
const constants = require('../constants');

const itemsArray = constants.productItems;

function discountPromiseGet() {
  const itemsWithDiscount = helpers.discountPromise(itemsArray);

  return {
    code: 200,
    message: itemsWithDiscount,
  };
}

function discountPromisePost(req) {

  const postData = JSON.parse(req.body);

  if (!itemsValidator(postData)) {
    return {
      code: 400,
      message: 'Bad request',
    };
  }

  const highestPriceItems = helpers.highestPriceHelper(postData);

  return {
    code: 200,
    message: highestPriceItems,
  };
}

module.exports = {
  discountPromiseGet,
  discountPromisePost
};
