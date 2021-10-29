const fs = require('fs');

const jsonString = fs.readFileSync('./data.json');
const {items} = JSON.parse(jsonString);

