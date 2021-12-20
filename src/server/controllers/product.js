const { productService } = require('../../services');

async function productGet(req, res) {
  const { responseData, code } = await productService.productGet(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(responseData));
  res.end();
}

async function productPost(req, res) {
  const { responseData, code } = await productService.productPost(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(responseData));
  res.end();
}

async function productPut(req, res) {
  const { responseData, code } = await productService.productPut(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(responseData));
  res.end();
}

async function productDelete(req, res) {
  const { code } = await productService.productDelete(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify('Success'));
  res.end();
}

module.exports = {
  productGet,
  productPost,
  productPut,
  productDelete,
};
