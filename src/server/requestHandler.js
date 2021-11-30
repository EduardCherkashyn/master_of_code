const { handleRoutes, handleStreamRoutes } = require('./routes');

module.exports = (req, res) => {
  if (req.headers['content-type'] === 'text/csv') {
    handleStreamRoutes(req, res)
      .catch(err => console.error('CSV handler failed', err));
    return;
  }

  let body = [];
  const  { url, headers: { host } } = req;
  const { pathname, searchParams } = new URL(url, `https://${host}`);

  req
    .on('error', (err) => {
      console.error(err);
    })
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      handleRoutes({ ...req, pathname, body, params: searchParams }, res);
    });
};
