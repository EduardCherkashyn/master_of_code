const { pipeline } = require('stream');
const fs = require('fs');
const { promisify } = require('util');

const existDir = promisify(fs.exists);
const makeDir = promisify(fs.mkdir);

const promisifiedPipeline = promisify(pipeline);
const { createCsvToJson } = require('../utils/csv-to-json');

async function uploadCsv(inputStream) {
  const uploadsDir = './uploads/';

  try {
    const isUploadsDirExist = await existDir(uploadsDir);

    if (!isUploadsDirExist) {
      await makeDir(uploadsDir);
    }
  } catch (err) {
    console.error('Couldn\'t create uploads directory', err);
  }

  const timestamp = Date.now();
  const filepath = `${uploadsDir}${timestamp}.json`;
  const outputStream = fs.createWriteStream(filepath);
  const csvToJson = createCsvToJson(filepath);

  try {
    await promisifiedPipeline(inputStream, csvToJson, outputStream);
  } catch (err) {
    console.error('Csv pipeline failed', err);
  }
}

module.exports = {
  uploadCsv
};
