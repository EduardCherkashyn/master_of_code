const fs = require('fs');

const jsonString = fs.readFileSync('./data.json');
const {items} = JSON.parse(jsonString);

const {
  helper1: filterHelper,
  helper2: highestPriceHelper,
  helper3: addingTotalPriceHelper
} = require('./helpers/index');

function boot(itemsArray) {
  const itemsWithTotalPrices = addingTotalPriceHelper(itemsArray);
  console.log(itemsWithTotalPrices);

  const orangeItems = filterHelper(itemsArray, 'item', 'orange');
  console.log(orangeItems);

  const itemsWithWeight4 = filterHelper(itemsArray, 'weight', 4);
  console.log(itemsWithWeight4);

  const filteredItems = [...orangeItems, ...itemsWithWeight4];
  const highestPriceFilteredItems = highestPriceHelper(filteredItems);
  console.log(highestPriceFilteredItems);
  console.log(addingTotalPriceHelper([highestPriceFilteredItems]));

  console.log(highestPriceHelper());
}

boot(items);
