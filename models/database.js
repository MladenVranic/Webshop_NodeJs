//creating DB connection
const mysql = require('mysql2');

//module exports the DB connection, so we can import it in every file we want to use it
module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xenia',
    database: 'webshop'
});
