const itemsValidator = require('./validators/itemsValidator');
const helpers = require('./helpers');
const itemsProvider = require('../itemsProvider');

async function discountPromiseGet() {
  const itemsArray = await itemsProvider.getItems();

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
