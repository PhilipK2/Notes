var mysql = require("mysql");

//CREATES CONNECTION TO DATA BASE
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    
    user: "root",
    password: "ddbhi645",
    database: "musicDB"
});
//COULD MAKE A SECOND CONNECTION TO ANOTHER DB IF NEEDED "VAR CONNECTION2" RARELY NEEDED

connection.connect(function(err){   //ASYN TAKES TIME TO EXECUTE
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
    getGenre();
});

function afterConnection(){
    connection.query("SELECT * FROM albums", function(err, res){
        //THE WHERE STATEMENT CAME IN AFTER, THIS WAS TO REFINE SEARCH
        if (err) throw err;
        for (var i = 0; i < res.length; i++){
        console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre + " | ");
        console.log("--------------------------------------------------");
        }
        //conection.query("UPDATE....", function(e,r){
        //whatever has to happen after the result of this query come back
        //})
    });
}
function getGenre(){
    connection.query("SELECT * FROM albums WHERE genre = 'electronic'", function(err, res){
 // connection.query("SELECT * FROM albums WHERE genre =?", ["Electronic"], function(err, res)
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

//q2 = connection.query("UPDATE albums SET artist=? WHERE title=? AND genre=?")
