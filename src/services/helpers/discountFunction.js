function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDiscountFunction(callback) {
    const randomDelay = generateRandomInteger(0, 1000);
    setTimeout(() => {
      const randomNumber = generateRandomInteger(1, 50);
      if (randomNumber > 35) {
        callback(new Error('Something went wrong'));
      } else callback(null, randomNumber);
    }, randomDelay);
}

function getPriceWithDiscount(item, discount) {
  const discountPercent = (100 - discount) / 100;
    let priceWithDiscount = item.price * discountPercent;

    if (item.item === 'pineapple' && item.type === 'Red Spanish') {
      priceWithDiscount *= discountPercent;
    }

    if (item.item === 'orange' && item.type === 'Tangerine') {
      priceWithDiscount *= discountPercent;
      priceWithDiscount *= discountPercent;
    }

    return priceWithDiscount.toFixed(2);
}

module.exports = {
  getDiscountFunction,
  getPriceWithDiscount
};
