const helpers = require('../helpers');
const validators = require('../validators');

function filter(req) {
  if (req.body === '{}') {
    return {
      code: 200,
      responseData: {
        items: helpers.items
      }
    };
  }

  const bodyParams = JSON.parse(req.body);

  if (!validators.isAllowedKeysParams(Object.keys(bodyParams))) {
    return {
      code: 404,
      responseData: {
        message: 'Bad request'
      }
    };
  }

  const paramsArray = Object.entries(bodyParams);
  const isAllowedValuesParams = validators.isAllowedValuesParams(
    paramsArray
  );

  if (!isAllowedValuesParams) {
    return {
      code: 404,
      responseData: {
        message: 'Bad request'
      }
    };
  }

  const filterParams = paramsArray;
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
