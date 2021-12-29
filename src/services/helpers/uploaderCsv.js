const { pipeline } = require('stream');
const { promisify } = require('util');

const promisifiedPipeline = promisify(pipeline);
const { createCsvToJson } = require('../utils/csv-to-json');

async function uploadCsv(inputStream) {
  const csvToJson = createCsvToJson();

  try {
    await promisifiedPipeline(inputStream, csvToJson);
  } catch (err) {
    console.error('Csv pipeline failed', err);
  }
}

module.exports = {
  uploadCsv,
};
