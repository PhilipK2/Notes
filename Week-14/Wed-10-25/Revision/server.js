var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ddbhi645",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Express and MySQL code should go here.

app.get('/',function(req,res) {
  connection.query('select * from quotes',function(e,rslt) {
    if (e) {
      res.status(500).end();
    } else {
      res.render('index',{quotes:rslt});
    }
  });
});

app.get('/:id',function(req,res) {
  connection.query('select * from quotes where ?',[{id:req.params.id}],function(e,rslt) {
    if (e) {
      res.status(500).end();
    } else {
      console.log(rslt);
      res.render('single-quote',rslt[0]);
    }
  });
});

app.post('/',function(req,res) {
  var newQuote = req.body;
  connection.query('insert into quotes (author, quote) values (?,?)',[newQuote.author,newQuote.quote],function(e,rslt) {
    if (e){
      res.status(500).end();
    } else if (rslt.insertId) {
      res.json({id:rslt.insertId})
    } else {
      res.status(404).end();
    }
  });
});

app.put('/:id',function(req,res) {
  connection.query('update quotes set ? where ?',[req.body,{id:req.params.id}],function(e,rslt) {
    if (e){
      res.status(500).end();
    } else if (rslt.affectedRows==1) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  });
});

app.delete('/:id',function(req,res) {
  connection.query('delete from quotes where ?',[{id:req.params.id}],function(e,rslt) {
    if (e) {
      res.status(500).end();
    } else if (rslt.affectedRows==1) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  });
});

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
