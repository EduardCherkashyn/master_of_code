const helpers = require('../helpers');
const validators = require('../validators');

async function filter(req) {
  const itemsRaw = await helpers.items();
  const queryParams = req.query;

  if (queryParams.toString() === '') {
    return {
      code: 200,
      responseData: {
        message: itemsRaw
      }
    };
  }

  if (!validators.isAllowedKeysParams(Object.keys(queryParams))) {
    return {
      code: 400,
      responseData: {
        message: 'Bad request'
      }
    };
  }

  const isAllowedValuesParams = validators.isAllowedValuesParams(
    Object.entries(queryParams)
  );

  if (!isAllowedValuesParams) {
    return {
      code: 400,
      responseData: {
        message: 'Bad request'
      }
    };
  }

  const filterParams = Object.entries(queryParams);
  const filteredItems = filterParams.reduce((items, current) => {
    const keyParam = current[0];
    const valueParam = current[1];

    return helpers.filterHelper(items, keyParam, valueParam);
  }, itemsRaw);

  if (filteredItems.length === 0) {
    return {
      code: 204,
      responseData: {
        message: 'No items found.'
      }
    };
  }

  return {
    code: 200,
    responseData: {
      items: filteredItems
    }
  };
}

module.exports = {
  filter
};
