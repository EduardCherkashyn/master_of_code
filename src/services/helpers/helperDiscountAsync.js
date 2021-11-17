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

async function getDiscount() {
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

async function calculateDiscount() {
  let discount = await getDiscount()
    .then((res) => res)
    .catch(() => 0);

  if (!discount) {
    discount = await getDiscount()
    .then((res) => res)
    .catch(() => 0);
  }

  return discount;
}

module.exports =  async (itemsData) => {
  const result = await Promise.all(itemsData.map(async (item) => {
    const itemTotalPrice = getTotalPrice(item);
    let priceWithDiscount = 'Discount is not available';
    const discount = await calculateDiscount();

    if (discount) {
      const discountPercent = (100 - discount) / 100;
      priceWithDiscount = itemTotalPrice * discountPercent;

      if (item.item === 'pineapple' && item.type === 'Red Spanish') {
        priceWithDiscount *= discountPercent;
      }

      if (item.item === 'orange' && item.type === 'Tangerine') {
        priceWithDiscount *= discountPercent;
        priceWithDiscount *= discountPercent;
      }

      priceWithDiscount = priceWithDiscount.toFixed(2);
    }

    return { ...item, priceWithDiscount , discount: `${discount}%`};
  }));

  return result;
};
