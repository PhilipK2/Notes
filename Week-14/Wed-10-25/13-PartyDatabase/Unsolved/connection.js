var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ddbhi645",
    database: "parties_db"
});

connection.connect(function(err){
    if (err) throw err;
    else{
        console.log("connected as id " + connection.threadId)
    }
});

module.exports = connection;