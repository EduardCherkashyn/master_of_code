const helpers = require('../helpers');
const validators = require('../validators');

function filter(req) {
  const queryParams = req.params;

  if (queryParams.toString() === '') {
    return {
      code: 200,
      responseData: {
        message: helpers.items
      }
    };
  }

  if (!validators.isAllowedKeysParams(Array.from(queryParams.keys()))) {
    return {
      code: 400,
      responseData: {
        message: 'Bad request'
      }
    };
  }

  const isAllowedValuesParams = validators.isAllowedValuesParams(
    Array.from(queryParams.entries())
  );

  if (!isAllowedValuesParams) {
    return {
      code: 400,
      responseData: {
        message: 'Bad request'
      }
    };
  }

  const filterParams = Array.from(queryParams.entries());
  const filteredItems = filterParams.reduce(function(items, current) {
    const keyParam = current[0];
    const valueParam = current[1];

    return helpers.filterHelper(items, keyParam, valueParam);
  }, helpers.items);

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
