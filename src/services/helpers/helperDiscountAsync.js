const discountFunction = require('./discountFunction');

function calculateDiscount() {
  return new Promise((resolve) => {
    discountFunction((err, result) => {
      if (err) return resolve(calculateDiscount());

      return resolve(result);
    });
  });
}

module.exports =  async (itemsData) => {
  const result = await Promise.all(itemsData.map(async (item) => {
    const discount = await calculateDiscount();
    const discountPercent = (100 - discount) / 100;
    let priceWithDiscount = item.price * discountPercent;

    if (item.item === 'pineapple' && item.type === 'Red Spanish') {
      priceWithDiscount *= discountPercent;
    }

    if (item.item === 'orange' && item.type === 'Tangerine') {
      priceWithDiscount *= discountPercent;
      priceWithDiscount *= discountPercent;
    }

    priceWithDiscount = priceWithDiscount.toFixed(2);

    return { ...item, priceWithDiscount , discount: `${discount}%`};
  }));

  return result;
};
