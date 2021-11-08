const controllers = require('./controllers');

module.exports = (req, res) => {
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
  ) return controllers.topPrice(req, res);

  if (pathname === '/topprice'
    && method === 'POST'
  ) return controllers.topPrice(req, res);

  // Common price endpoints
  if (pathname === '/commonprice'
    && method === 'GET'
  ) return controllers.commonPrice(req, res);

  if (pathname === '/commonprice'
    && method === 'POST'
  ) return controllers.commonPrice(req, res);

  // Data override endpoint
  if (pathname === '/data'
    && method === 'POST'
  ) return controllers.dataOverride(req, res);

  return controllers.notFound(req, res);
};
