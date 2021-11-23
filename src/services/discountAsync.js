const itemsValidator = require('./validators/itemsValidator');
const helpers = require('./helpers');
const constants = require('../constants');

const itemsArray = constants.productItems;

async function discountAsyncGet() {
  const itemsWithTotalPrice = helpers.addingTotalPriceHelper(itemsArray);
  const itemsWithDiscount = await helpers.discountAsync(itemsWithTotalPrice);

  return {
    code: 200,
    message: itemsWithDiscount,
  };
}

async function discountAsyncPost(req) {

  const postData = JSON.parse(req.body);

  if (!itemsValidator(postData)) {
    return {
      code: 400,
      message: 'Bad request',
    };
  }

  const itemsWithTotalPrice = helpers.addingTotalPriceHelper(postData);
  const itemsWithDiscount = await helpers.discountAsync(itemsWithTotalPrice);


  return {
    code: 200,
    message: itemsWithDiscount,
  };
}

module.exports = {
  discountAsyncGet,
  discountAsyncPost
};
