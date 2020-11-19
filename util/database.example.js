const Sequelize = require('sequelize');

const sequelize = new Sequelize('litemarketdb', 'your user', 'your password', {
  dialect: 'mysql',
  host: 'your host',
});

module.exports = sequelize;
