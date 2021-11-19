const itemsValidator = require('./validators/itemsValidator');
const helpers = require('./helpers');
const constants = require('../constants');

const itemsArray = constants.productItems;

function discountPromiseGet() {
  return helpers.discountPromise(helpers.addingTotalPriceHelper(itemsArray));
}

function discountPromisePost(req) {
  const postData = JSON.parse(req.body);

  return new Promise((resolve, reject) => {
    if (!itemsValidator(postData)) reject(new Error('Not valid data'));
    resolve(helpers.discountPromise(helpers.addingTotalPriceHelper(postData)));
  });
}

module.exports = {
  discountPromiseGet,
  discountPromisePost
};
