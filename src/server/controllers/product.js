const { productService } = require('../../services');

async function productGetAll(req, res, next) {
  try {
    const { responseData, code } = await productService.productGetAll();
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = code;
    res.write(JSON.stringify(responseData));
    res.end();
  } catch (err) {
    return next(err);
  }
}

async function productGet(req, res, next) {
  try {
    const { responseData, code } = await productService.productGet(req);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = code;
    res.write(JSON.stringify(responseData));
    res.end();
  } catch (err) {
    return next(err);
  }
}

async function productPost(req, res, next) {
  try {
    const { responseData, code } = await productService.productPost(req);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = code;
    res.write(JSON.stringify(responseData));
    res.end();
  } catch (err) {
    return next(err);
  }
}

async function productPut(req, res, next) {
  try {
    const { responseData, code } = await productService.productPut(req);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = code;
    res.write(JSON.stringify(responseData));
    res.end();
  } catch (err) {
    return next(err);
  }
}

async function productDelete(req, res, next) {
  try {
    const { code } = await productService.productDelete(req);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = code;
    res.write(JSON.stringify('Success'));
    res.end();
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  productGetAll,
  productGet,
  productPost,
  productPut,
  productDelete,
};
