const mysql = require('mysql')

async function createConnection(){
  const con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: 'users_db'
  })
  return con;
}

exports.createConnection = createConnection;