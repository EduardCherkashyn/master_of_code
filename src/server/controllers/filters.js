const services = require('../../services');

async function filterGet(req, res) {
  const { responseData, code } = await services.filterGet(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(responseData));
  res.end();
}

async function filterPost(req, res) {
  const { responseData, code } = await services.filterPost(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(responseData));
  res.end();
}

module.exports = {
  filterGet,
  filterPost
};
