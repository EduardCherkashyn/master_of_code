function validateScalar(propertyData, requiredType) {
  if (typeof propertyData !== requiredType) {
    throw new Error('Bad request!');
  }
}

function formatPrice(priceRaw) {
  const price = priceRaw.substr(1);

  return Number(price.replace(',', '.'));
}

function validatePrice(priceRaw) {
  validateScalar(priceRaw, 'string');
  const dollarSign = priceRaw.substr(0, 1);

  if (dollarSign !== '$') {
    throw new Error('Bad request!');
  }

  if (isNaN(formatPrice(priceRaw))) {
    throw new Error('Bad request!');
  }
}

function validateValues(paramValues) {
  paramValues.forEach((item) => {
    const keyParam = item[0];
    const valueParam = item[1];

    switch(keyParam) {
      case 'item':
        validateScalar(valueParam, 'string');
        break;
      case 'type':
        validateScalar(valueParam, 'string');
        break;
      case 'weight':
        validateScalar(valueParam, 'number');
        break;
      case 'pricePerKilo':
        validatePrice(valueParam);
        break;
      case 'pricePerItem':
        validatePrice(valueParam);
        break;
      case 'quantity':
        validateScalar(valueParam, 'number');
        break;
      default:
        throw new Error('Bad Request!');
    }
  });
}

module.exports = (valuesArray) => {
  let isValid = true;

  try {
    validateValues(valuesArray);
  } catch (error) {
    isValid = false;
  }

  return isValid;
};

