const itemsValidator = require('./validators/itemsValidator');
const helpers = require('./helpers');

function topPriceGet() {
  const highestPriceItems = helpers.highestPriceHelper();

  return {
    code: 200,
    message: highestPriceItems,
  };
}

function topPricePost(req) {

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
  topPriceGet,
  topPricePost
};
