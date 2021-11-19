const {
  getDiscountFunction,
  getPriceWithDiscount
} = require('./discountFunction');

function calculateDiscount() {
  return new Promise((resolve) => {
    getDiscountFunction((err, result) => {
      if (err) return resolve(calculateDiscount());

      return resolve(result);
    });
  });
}

module.exports =  async (itemsData) => {
  const result = await Promise.all(itemsData.map(async (item) => {
    const discount = await calculateDiscount();
    const priceWithDiscount = getPriceWithDiscount(item, discount);

    return { ...item, priceWithDiscount , discount: `${discount}%`};
  }));

  return result;
};
