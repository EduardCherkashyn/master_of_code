module.exports = (items) => {
  const itemsFormatted = [];
  const keysToSkip = [];

  items.forEach((element, key) => {
    const formattedElement = element;
    const itemsArrayDublicate = items;

    itemsArrayDublicate.forEach((item, index) => {
      if (key !== index  && !keysToSkip.includes(index)) {
        if (element.pricePerKilo) {
          if (element.item === item.item
            && element.type === item.type
            && element.pricePerKilo === item.pricePerKilo
          ) {
            formattedElement.weight = parseInt(item.weight) +
              parseInt(formattedElement.weight);
            keysToSkip.push(index);
          }
        } else if (element.pricePerItem === item.pricePerItem
            && element.item === item.item
            && element.type === item.type
            && element.pricePerItem === item.pricePerItem
        ) {
          formattedElement.quantity = parseInt(item.quantity) +
              parseInt(formattedElement.quantity);
          keysToSkip.push(index);
        }
      }
    });

    if (!keysToSkip.includes(key)) itemsFormatted.push(formattedElement);
  });

  return itemsFormatted;
};
