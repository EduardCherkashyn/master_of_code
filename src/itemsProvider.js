const fs = require('fs');
const util = require('util');

const uploadsFolder = './uploads/';
const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);

async function getFileName() {
  let result = './src/data.json';
  let latestUploadedFile = '';
  const files = await readDir(uploadsFolder);

  files.forEach(file => {
    const fileName = file.split('.')[0];

    if (!latestUploadedFile) {
      latestUploadedFile = fileName;
    } else if (fileName > latestUploadedFile) {
      latestUploadedFile = fileName;
    }
  });

  if (latestUploadedFile) result = `${uploadsFolder}${latestUploadedFile}.json`;

  return result;
}

async function getItems() {
  const fileName = await getFileName();
  const content = await readFile(fileName, 'utf8');
  const result = await JSON.parse(content);

  return result;
}

module.exports = {
  getItems
};
