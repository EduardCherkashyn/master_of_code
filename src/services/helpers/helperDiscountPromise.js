const {
  getDiscountFunction,
  getPriceWithDiscount
} = require('./discountFunction');

function getDiscount() {
  return new Promise((resolve) => {
    getDiscountFunction((err, result) => {
      if (err) return resolve(getDiscount());

      return resolve(result);
    });
  });
}

module.exports = (itemsData) => {
  return Promise.all(itemsData.map(item =>
    getDiscount()
      .then((discount) => {
        const priceWithDiscount = getPriceWithDiscount(item, discount);

        return Object.assign(
          item,
          { priceWithDiscount, discount: `${discount}%` }
        );
      })
  ));
};
