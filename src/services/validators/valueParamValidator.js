function validateScalar(propertyData, message, requiredType) {
  if (typeof propertyData !== requiredType) {
    throw new Error(message);
  }
}

function formatPrice(priceRaw) {
  const price = priceRaw.substr(1);

  return Number(price.replace(',', '.'));
}

function validatePrice(priceRaw, validatedProperty) {
  validateScalar(
    priceRaw,
    `${validatedProperty  } property should be string!`,
    'string'
  );
  const dollarSign = priceRaw.substr(0, 1);

  if (dollarSign !== '$') {
    throw new Error(`${validatedProperty  } should start with $ symbol.`);
  }

  if (isNaN(formatPrice(priceRaw))) {
    throw new Error(`${validatedProperty  } should be valid number.`);
  }
}

function isValidValues(paramValues) {
  paramValues.forEach((item) => {
    const keyParam = item[0];
    const valueParam = item[1];

    switch(keyParam) {
      case 'item':
        validateScalar(
          valueParam,
          'Item value should be string!',
          'string'
        );
        break;
      case 'type':
        validateScalar(
          valueParam,
          'Type value should be string!',
          'string'
        );
        break;
      case 'weight':
        validateScalar(
          valueParam,
          'Weight value should be number!',
          'number'
        );
        break;
      case 'pricePerKilo':
        validatePrice(valueParam, 'Price per kilo');
        break;
      case 'pricePerItem':
        validatePrice(valueParam, 'Price per item');
        break;
      case 'quantity':
        validateScalar(
          valueParam,
          'Quantity value should be number!',
          'number'
        );
        break;
      default:
        throw new Error('Key param is not allowed!');
    }
  });
}

module.exports = (valuesArray) => {
  let isValid = true;
  let errorMessage = '';

  try {
    isValidValues(valuesArray);
  } catch (error) {
    isValid = false;
    errorMessage = error.message;
  }

  return {isValid, errorMessage};
};

