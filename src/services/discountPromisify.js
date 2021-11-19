const itemsValidator = require('./validators/itemsValidator');
const helpers = require('./helpers');
const constants = require('../constants');

const itemsArray = constants.productItems;

function discountPromisifyGet() {
  return helpers.discountPromisify(helpers.addingTotalPriceHelper(itemsArray));
}

function discountPromisifyPost(req) {
  const postData = JSON.parse(req.body);

  return new Promise((resolve, reject) => {
    if (!itemsValidator(postData)) reject(new Error('Not valid data'));
    resolve(
      helpers.discountPromisify(helpers.addingTotalPriceHelper(postData))
    );
  });
}

module.exports = {
  discountPromisifyGet,
  discountPromisifyPost
};
