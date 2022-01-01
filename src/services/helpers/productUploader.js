const product = require('../../db/product')();
const { product: productModel } = require('../../../models');

module.exports = (totalItems) => {
  try {
    JSON.parse(totalItems).forEach(async (productToUpDate) => {
      let priceValue = '';
      let priceType = 'pricePerKilo';
      let measure = 'weight';
      let measureValue = '';

      if (productToUpDate.hasOwnProperty('pricePerItem')) {
        priceValue = productToUpDate.pricePerItem;
        priceType = 'pricePerItem';
        measure = 'quantity';
        measureValue = productToUpDate.quantity;
      } else {
        priceValue = productToUpDate.pricePerKilo;
        measureValue = productToUpDate.weight;
      }

      const res = await productModel.findAll({
        where: {
          item: productToUpDate.item,
          type: productToUpDate.type,
          priceValue,
          deletedAt: null,
        },
        raw: true,
        nest: true,
      });

      if (res.length === 0) {
        product.createProduct({
          item: productToUpDate.item,
          type: productToUpDate.type,
          measure,
          measureValue,
          priceType,
          priceValue,
        });
      } else {
        const existedProduct = res[0];
        existedProduct.measureValue += measureValue;
        product.updateProduct(existedProduct);
      }
    });
  } catch (err) {
    console.error(err.message || err);
  }
};
