const services = require('../../services');

function filterGet(req, res) {
  const { responseData, code } = services.filterGet(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(responseData));
  res.end();
}

function filterPost(req, res) {
  const { responseData, code } = services.filterPost(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = code;
  res.write(JSON.stringify(responseData));
  res.end();
}

module.exports = {
  filterGet,
  filterPost
};
