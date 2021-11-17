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

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDiscount() {
  return new Promise ((resolve, reject) => {
    const randomDelay = generateRandomInteger(0, 1000);
    setTimeout(() => {
      const randomNumber = generateRandomInteger(1, 50);
      if (randomNumber > 35) {
        reject(new Error('Something went wrong'));
      } else resolve(randomNumber);
    }, randomDelay);
  });
}

module.exports = (itemsData) => {
  let discount = 0;
  getDiscount()
    .then((res) => {
      discount = res;
      console.log(res);
    })
    .catch((err) => console.log(err));
  const result = itemsData.map(item => {
      const itemTotalPrice = getTotalPrice(item);

      return { ...item, price: itemTotalPrice };
  });
  console.log(discount);
  return result;
};
