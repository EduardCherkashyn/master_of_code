const itemsValidator = require('./validators/itemsValidator');
const helpers = require('./helpers');
const constants = require('../constants');

const itemsArray = constants.productItems;

function discountPromiseGet(response) {
  helpers.discountPromise(helpers.addingTotalPriceHelper(itemsArray))
    .then(data => {
      response.statusCode = 200;
      response.write(JSON.stringify(data));
      response.end();
    });
}

function discountPromisePost(req, response) {
  const postData = JSON.parse(req.body);

  if (!itemsValidator(postData)) {
    response.statusCode = 400;
    response.write(JSON.stringify('Bad request'));
    response.end();
  } else {
    helpers.discountPromise(helpers.addingTotalPriceHelper(postData))
      .then(data => {
        response.statusCode = 200;
        response.write(JSON.stringify(data));
        response.end();
      });
  }
}

module.exports = {
  discountPromiseGet,
  discountPromisePost
};