const helpers = require('../helpers');
const validators = require('../validators');

async function filter(req) {
  const itemsRaw = await helpers.items();

  if (req.body === '{}') {
    return {
      code: 200,
      responseData: {
        items: itemsRaw
      }
    };
  }

  const bodyParams = req.body;

  bodyParams.forEach(element => {
    if (!validators.isAllowedKeysParams(Object.keys(element))) {
      return {
        code: 404,
        responseData: {
          message: 'Bad request'
        }
      };
    }
  });

  bodyParams.forEach(element => {
    const isAllowedValuesParams = validators.isAllowedValuesParams(
      Object.entries(element)
    );

    if (!isAllowedValuesParams) {
      return {
        code: 404,
        responseData: {
          message: 'Bad request'
        }
      };
    }
  });


  const filterParams = Object.entries(req.query);
  const filteredItems = filterParams.reduce((items, current) => {
    const keyParam = current[0];
    const valueParam = current[1];

    return helpers.filterHelper(items, keyParam, valueParam);
  }, bodyParams);

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
