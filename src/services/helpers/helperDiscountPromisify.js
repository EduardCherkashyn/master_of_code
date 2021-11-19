const util = require('util');
const discountFunction = require('./discountFunction');

function getDiscount() {
  return util.promisify((resolve) => {
    discountFunction((err, result) => {
      if (err) return resolve(getDiscount());

      return resolve(result);
    });
  });
}

module.exports = (itemsData) => {
  return Promise.all(itemsData.map(item =>
    getDiscount()
      .then((discount) => {
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

        return Object.assign(
          item,
          { priceWithDiscount, discount: `${discount}%` }
        );
      })
  ));
};
