const itemsValidator = require('./validators/itemsValidator');
const helpers = require('./helpers');

function commonPriceGet() {
  const formattedItems = helpers.addingTotalPriceHelper(helpers.items);

  return {
    code: 200,
    message: formattedItems,
  };
}

function commonPricePost(req) {
  const postData = JSON.parse(req.body);

  if (!itemsValidator(postData)) {
    return {
      code: 400,
      message: 'Bad request',
    };
  }

  const formattedItems = helpers.addingTotalPriceHelper(postData);

  return {
    code: 200,
    message: formattedItems,
  };
}

module.exports = {
  commonPriceGet,
  commonPricePost
};
