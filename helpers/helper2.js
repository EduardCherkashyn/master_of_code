const fs = require('fs');

function getIntPriceAmount(priceRaw)
{
  const price = priceRaw.substr(1);

  return Number(price.replace(',', '.'));
}

function getTotalPrice(item) {
  if (item.pricePerKilo) {
    return getIntPriceAmount(item.pricePerKilo) * item.weight;
  }

  return getIntPriceAmount(item.pricePerItem) * item.quantity;
}

module.exports = (itemsData = 0) => {
  let highestPrice = '';
  let highestPriceItem = '';

  if (itemsData === 0) {
    const jsonString = fs.readFileSync('./data.json');
    const {items: itemsArray} = JSON.parse(jsonString);
    itemsData = itemsArray;
  }

  itemsData.forEach(item => {
      const itemTotalPrice = getTotalPrice(item);

      if (!highestPrice) {
        highestPriceItem = item;
        highestPrice = itemTotalPrice;
      } else if (highestPrice < itemTotalPrice) {
        highestPrice = itemTotalPrice;
        highestPriceItem = item;
      }
  });

  return highestPriceItem;
};