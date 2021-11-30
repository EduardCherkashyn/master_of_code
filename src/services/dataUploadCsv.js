const { uploadCsv } = require('./helpers/uploaderCsv');

async function dataUploadCsv(req) {
  await uploadCsv(req);

  return {
    code: 200
  };
}

module.exports = dataUploadCsv;
