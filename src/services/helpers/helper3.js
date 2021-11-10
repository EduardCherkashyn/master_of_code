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

module.exports = (itemsData) => {
  const result = itemsData.map(item => {
      const itemTotalPrice = getTotalPrice(item);

      return {...item, price: itemTotalPrice};
  });

  return result;
};
