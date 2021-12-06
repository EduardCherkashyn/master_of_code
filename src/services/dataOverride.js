const fs = require('fs');
const itemsValidator = require('./validators/itemsValidator');

function dataOverride(req) {
  const postData = req.body;

  if (!itemsValidator(postData)) {
    return {
      code: 400,
      message: 'Bad request',
    };
  }

  fs.writeFile(
    './src/data.json',
    JSON.stringify(postData, null, '\t'),
    err => {
      if (err) {
        return {
          code: 404,
          message: err,
        };
      }
  });

  return {
    code: 200,
    message: postData,
  };
}

module.exports = dataOverride;
