const controllers = require('./controllers');

function handleRoutes(req, res) {
  const { pathname, method } = req;

  // Filter endpoints
  if (pathname === '/filter'
    && method === 'GET'
  ) return controllers.filterGet(req, res);

  if (pathname === '/filter'
    && method === 'POST'
  ) return controllers.filterPost(req, res);

  // Top price endpoints
  if (pathname === '/topprice'
    && method === 'GET'
  ) return controllers.topPriceGet(req, res);

  if (pathname === '/topprice'
    && method === 'POST'
  ) return controllers.topPricePost(req, res);

  // Common price endpoints
  if (pathname === '/commonprice'
    && method === 'GET'
  ) return controllers.commonPriceGet(req, res);

  if (pathname === '/commonprice'
    && method === 'POST'
  ) return controllers.commonPricePost(req, res);

  // Data override endpoint
  if (pathname === '/data'
    && method === 'POST'
  ) return controllers.dataOverride(req, res);

  // Discount promise endpoints
  if (pathname === '/discount/promise'
    && method === 'GET'
  ) return controllers.discountPromiseGet(req, res);

  if (pathname === '/discount/promise'
    && method === 'POST'
  ) return controllers.discountPromisePost(req, res);

  // Discount promisify endpoints
  if (pathname === '/discount/promisify'
    && method === 'GET'
  ) return controllers.discountPromisifyGet(req, res);

  if (pathname === '/discount/promisify'
    && method === 'POST'
  ) return controllers.discountPromisifyPost(req, res);

  // Discount async endpoints
  if (pathname === '/discount/async'
    && method === 'GET'
  ) return controllers.discountAsyncGet(req, res);

  if (pathname === '/discount/async'
    && method === 'POST'
  ) return controllers.discountAsyncPost(req, res);

  return controllers.notFound(req, res);
}

function handleStreamRoutes(req, res) {
  const { url, method } = req;

  if (url === '/data'
    && method === 'PUT'
  ) return controllers.dataUploadCsv(req, res);

  return controllers.notFound(req, res);
}

module.exports = {
  handleRoutes,
  handleStreamRoutes
};
