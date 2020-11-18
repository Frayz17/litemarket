const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'your host',
  user: 'your user',
  database: 'litemarketdb',
  password: 'your password',
});

module.exports = pool.promise();
