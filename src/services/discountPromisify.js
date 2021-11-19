const itemsValidator = require('./validators/itemsValidator');
const helpers = require('./helpers');
const constants = require('../constants');

const itemsArray = constants.productItems;

function discountPromisifyGet(response) {
  helpers.discountPromisify(helpers.addingTotalPriceHelper(itemsArray))
    .then(data => {
      response.statusCode = 200;
      response.write(JSON.stringify(data));
      response.end();
    });
}

function discountPromisifyPost(req, response) {
  const postData = JSON.parse(req.body);

  if (!itemsValidator(postData)) {
    response.statusCode = 400;
    response.write(JSON.stringify('Bad request'));
    response.end();
  } else {
    helpers.discountPromisify(helpers.addingTotalPriceHelper(postData))
      .then(data => {
        response.statusCode = 200;
        response.write(JSON.stringify(data));
        response.end();
      });
  }
}

module.exports = {
  discountPromisifyGet,
  discountPromisifyPost
};
