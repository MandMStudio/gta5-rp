let mysql = require('mysql');

let pool = mysql.createPool({
  connectionLimit: 20,
  host     : 'remotemysql.com',
  port     : '3306',
  user     : 'Evg5778rJJ',
  password : 'jdL4Wxxr8J',
  database : 'Evg5778rJJ'
});

pool.query("select * from user where id = 1", function (err, result) {
  if (err) throw err;
  console.log(result);
});

module.exports = pool;
