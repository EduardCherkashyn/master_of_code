const { Sequelize } = require('sequelize');
const config = require('../config');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(config.db);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
