sql = require('mysql');
var inquirer = require("inquirer");

var connection = sql.createConnection({
    host: "localhost",
    port: 3306,
    
    user: "root",
    password: "ddbhi645",
    database: "top_songs"
});
connection.connect(function(err){   //ASYN TAKES TIME TO EXECUTE
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    runApp();
});

runApp = function() {
//FIND ALL DATS ON ALL SONGS BY A ARTIST
connection.query("SELECT * FROM top5000 WHERE artist= 'Pink Floyd'", function(err, result){
    if (err) throw err;
    console.log(result);
    console.log("\n**********************************************");
});
connection.query("SELECT * FROM top5000 WHERE id BETWEEN 30 AND 40", function(err, result){
    if (err) throw err;
    console.log(result);
});
}

