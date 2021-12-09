const itemsValidator = require('./validators/itemsValidator');
const helpers = require('./helpers');

async function topPriceGet() {
  const highestPriceItems = await helpers.highestPriceHelper();

  return {
    code: 200,
    message: highestPriceItems,
  };
}

async function topPricePost(req) {
  const postData = req.body;

  if (!itemsValidator(postData)) {
    return {
      code: 400,
      message: 'Bad request',
    };
  }

  const highestPriceItems = await helpers.highestPriceHelper(postData);

  return {
    code: 200,
    message: highestPriceItems,
  };
}

module.exports = {
  topPriceGet,
  topPricePost
};
