const { pipeline } = require('stream');
const fs = require('fs');
const { promisify } = require('util');
const objectsOptimizer = require('../utils/objects-optimizer');

const readFile = promisify(fs.readFile);
const promisifiedPipeline = promisify(pipeline);
const { createCsvToJson } = require('../utils/csv-to-json');

async function optimizeUploadedData(fileName) {
  const contentRaw = await readFile(fileName);

  if (contentRaw) {
    const dataToOptimize = JSON.parse(contentRaw.toString());

    if (dataToOptimize.length < 5000) {
      const optimizedJsonOutput = JSON.stringify(
        objectsOptimizer(dataToOptimize),
        null,
        1
      );
      fs.unlink(fileName, () => {
        fs.writeFile(fileName, optimizedJsonOutput, () => {
          console.log('Optimized file was created.');
        });
      });
    }
  }
}

async function uploadCsv(inputStream) {
  const timestamp = Date.now();
  const filepath = `./uploads/${timestamp}.json`;
  const outputStream = fs.createWriteStream(filepath);
  const csvToJson = createCsvToJson(filepath);

  try {
    await promisifiedPipeline(inputStream, csvToJson, outputStream);
    await optimizeUploadedData(filepath);
  } catch (err) {
    console.error('Csv pipeline failed', err);
  }
}

module.exports = {
  uploadCsv
};
