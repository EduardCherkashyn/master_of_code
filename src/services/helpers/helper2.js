const itemsProvider = require('../../itemsProvider');

function getIntPriceAmount(priceRaw) {
  const price = priceRaw.substr(1);

  return Number(price.replace(',', '.'));
}

function getTotalPrice(item) {
  if (item.pricePerKilo) {
    return getIntPriceAmount(item.pricePerKilo) * item.weight;
  }

  return getIntPriceAmount(item.pricePerItem) * item.quantity;
}

module.exports = async (itemsData = 0) => {
  let highestPrice = '';
  let highestPriceItem = '';
  let inputData = itemsData;

  if (itemsData === 0) {
    const itemsArray = itemsProvider.getItems();
    inputData = itemsArray;
  }

  inputData.forEach(item => {
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
