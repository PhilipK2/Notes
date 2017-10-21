var express = require("express");
var mysql = require("mysql");

var app = express();
var PORT = 3000;


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ddbhi645",
    database: "seinfeld_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as Id " + connection.threadId);
});


app.get("/cast", function(req,res){
    connection.query("SELECT * FROM actors", function(er, result){
        // res.json(result);
        var html = "<h1> Cast </h1>";
        html += "<ul>";
        for (var i = 0; i < result.length; i++){
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p> Name: " + result[i].name + "</p></li>";
        }
        html+="</ul>";
        res.send(html);
    });
});

 app.get("/coolness_chart", function(req, res){
    connection.query("SELECT * FROM actors ORDER BY coolness_points", function(er, result){
        res.json(result);
    });
});
app.get("/attitude_chart/:att", function(req,res){
    var myatt = req.params.att;
    connection.query("SECLECT * FROM actors WHERE attitude=?", [myatt], function(er,result){
        res.json(result);
    });
});


app.listen(PORT, function(er, res){
    console.log("listening");
})