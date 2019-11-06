var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'lmsapp',
    password : 'lmspassword',
    database : 'library'
});

module.exports = connection;