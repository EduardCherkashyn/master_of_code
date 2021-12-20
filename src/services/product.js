const db = require('../db')();

async function productGet(req) {
  const responseData = await db.getProduct(req.params.id);

  return {
    code: 200,
    responseData,
  };
}

async function productPost(req) {
  const product = req.body;
  const responseData = await db.createProduct({
    item: product.item,
    type: product.type,
    measure: product.measure,
    measureValue: product.measureValue,
    priceType: product.priceType,
    priceValue: product.priceValue,
  });

  return {
    code: 200,
    responseData,
  };
}

async function productPut(req) {
  const product = req.body;
  const productFields = {
    id: product.id,
    item: product.item,
    type: product.type,
    measure: product.measure,
    measure_value: product.measureValue,
    price_type: product.priceType,
    price_value: product.priceValue,
  };
  Object.keys(productFields).forEach((key) => {
    if (typeof productFields[key] === 'undefined') {
      delete productFields[key];
    }
  });
  const responseData = await db.updateProduct(productFields);

  return {
    code: 200,
    responseData,
  };
}

async function productDelete(req) {
  const { code } = await db.deleteProduct(req.params.id);

  return {
    code,
  };
}

module.exports = {
  productGet,
  productPost,
  productPut,
  productDelete,
};
