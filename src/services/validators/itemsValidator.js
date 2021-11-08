const isAllowedKeysParams = require('./keyParamValidator');
const isAllowedValuesParams = require('./valueParamValidator');

function isValidItem(item) {
  if (!isAllowedKeysParams(Object.keys(item))) {
     return false;
   }

   const isValidValues = isAllowedValuesParams(Object.entries(item));

   if (!isValidValues) {
     return false;
   }

   return true;
}

module.exports = (items) => {
  const isValid = items.every((item) => {
    if (!isValidItem(item)) {
      return false;
    }

    return true;
  });

  return isValid;
};
