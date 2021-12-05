module.exports = (itemsRaw) => {
  // If item price is integer value
  const arrayLengthWithIntegerPrice = 6;

  const itemsArray = itemsRaw.map(element => {
    return element.split(',');
  });

  const itemsFormatted = [];
  const keysToSkip = [];

  itemsArray.forEach((element, key) => {
    const formattedElement = element;
    const itemsArrayDublicate = itemsArray;

    itemsArrayDublicate.forEach((item, index) => {
      if (key !== index  && !keysToSkip.includes(index)) {
        if (element.length > arrayLengthWithIntegerPrice) {
          if (element[0] === item[0]
            && element[1] === item[1]
            && element[4] === item[4]
            && element[5] === item[5]
            && element[6] === item[6]
          ) {
            formattedElement[3] = parseInt(item[3]) +
              parseInt(formattedElement[3]);
            keysToSkip.push(index);
          }
        } else if (element[0] === item[0]
          && element[1] === item[1]
          && element[4] === item[4]
          && element[5] === item[5]
        ) {
          formattedElement[3] = parseInt(item[3]) +
              parseInt(formattedElement[3]);
          keysToSkip.push(index);
        }
      }
    });

    if (!keysToSkip.includes(key)) itemsFormatted.push(formattedElement);
  });

  return itemsFormatted;
};
