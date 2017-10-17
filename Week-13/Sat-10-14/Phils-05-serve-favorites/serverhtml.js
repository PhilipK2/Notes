var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server is listening on PORT: " + PORT);
});

function handleRequest(req, res) {
    
      var path = req.url; 
      switch (path) {
    

    
        case "/movies":
          return displayMovies(path, req, res);
        
        case "/food":
          return displayFood(path, req, res);

        case "/language":
          return displayLang(path, req, res);
          
        default:
          return displayRoot(path, req, res);

      }
    }

function displayRoot(url, req, res) {
    fs.readFile(__dirname + "/home.html", function(err, data) {
        
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data, 'utf-8');
          });
        }

var displayMovies = function (url, req, res) {
    fs.readFile(__dirname + "/serving3.html", function(err, data) {
        
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data, 'utf-8');
            });
        }

var displayFood = function (url, req, res) {
    fs.readFile(__dirname + "/serving2.html", function(err, data) {
        
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data, 'utf-8');
            });
        }

var displayLang = function (url, req, res) {
    fs.readFile(__dirname + "/serving.html", function(err, data) {
        
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data, 'utf-8');
            });
        }