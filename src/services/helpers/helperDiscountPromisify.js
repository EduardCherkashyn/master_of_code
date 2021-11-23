const util = require('util');
const {
  getDiscountFunction,
  getPriceWithDiscount
} = require('./discountFunction');

const getDiscount = util.promisify(getDiscountFunction);

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
      .catch((err) => {
        console.log(err);

        return item;
      })
  ));
};
