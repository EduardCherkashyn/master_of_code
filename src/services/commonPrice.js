const itemsValidator = require('./validators/itemsValidator');
const helpers = require('./helpers');

async function commonPriceGet() {
  const itemsRaw = await helpers.items();
  const formattedItems = await helpers.addingTotalPriceHelper(itemsRaw);

  return {
    code: 200,
    message: formattedItems,
  };
}

function commonPricePost(req) {
  const postData = req.body;

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
