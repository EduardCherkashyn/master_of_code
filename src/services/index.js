const { filter: filterGet} = require('./filters/get');
const { filter: filterPost} = require('./filters/post');

function notFound() {
  return {
    code: 404,
    message: 'page not found',
  };
}

module.exports = {
  filterGet,
  filterPost,
  notFound
};
