const { Transform } = require('stream');
const itemsOptimizer = require('./items-optimizer');

function parseStringToJson(dataRaw, isFirstLine) {
  let output = '';
  const optimizeData = itemsOptimizer(dataRaw);
  let isTopLine = isFirstLine;

  optimizeData.forEach(itemArray => {
    if (isTopLine) {
      output += '{';
      isTopLine = false;
    } else {
      output += ',\n{';
    }

    output += `"item":"${itemArray[0]}",`;
    output += `"type":"${itemArray[1]}",`;
    output += `"${itemArray[2]}":${itemArray[3]},`;

    if (itemArray.length > 6) {
      output += `"${itemArray[4]}":${itemArray[5]},${itemArray[6]}`;
    } else {
      output += `"${itemArray[4]}":"${itemArray[5]}"`;
    }

    output += '}';
  });

  return output;
}

function validateChunkSideItems(lastItem, firstItem) {
  const lastChunkItem = lastItem.split(',');
  const firstChunkItem = firstItem.split(',');

  if (lastChunkItem.length < 6 || firstChunkItem.length < 6) {
    return [lastItem + firstItem];
  }

  return [lastItem, firstItem];
}

function createCsvToJson() {
  let isFirstChunk = true;
  let output = '';
  let lastItemInChunk = '';
  let firstItemInChunk = '';

  const transform = (chunk, encoding, callback) => {
    if (isFirstChunk) {
      const data = chunk.toString().split('\n');
      data.shift();
      lastItemInChunk = data.pop();
      output = '[\n';
      const parsedData = parseStringToJson(data, true);
      output += parsedData;
      isFirstChunk = false;
    } else {
      output = '';
      const data = chunk.toString().split('\n');
      firstItemInChunk = data.shift();
      const chunkCutItems = validateChunkSideItems(
        lastItemInChunk,
        firstItemInChunk
      );
      lastItemInChunk = data.pop();

      chunkCutItems.forEach(element => {
        data.unshift(element);
      });

      output += parseStringToJson(data, false);
    }

    callback(null, output);
  };

  const flush = callback => {
    callback(null, '\n]');
  };

  return new Transform({ transform, flush });
}

module.exports = {
  createCsvToJson
};
