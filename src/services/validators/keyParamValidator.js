function isValidKeys(paramKeys) {
  const allowedKeys = [
    'item',
    'type',
    'weight',
    'pricePerKilo',
    'pricePerItem',
    'quantity'
  ];

  const isValid = paramKeys.every((item) => {
    if (!allowedKeys.includes(item)) {
      return false;
    }

    return true;
  });

  return isValid;
}

module.exports = (keysArray) => {
  let isValid = true;

  if (!isValidKeys(keysArray)) {
    isValid = false;
  }

  return isValid;
};
