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
    start();
});


function start() {
    inquirer
      .prompt({
        name: "to",
        type: "rawlist",
        message: "Loaded!",
        choices: ["Songs by Artist", "All Artists who appear in top 5000 more than once", "artist range", "specific song in top 5000"]
      })
      .then(function(err, answer) {
        switch (answer.to){
            case 1: 
            inquirer.prompt([
                {
                    name: "artist",
                    type: "input",
                    message: "What Artist do you pick?"
                  }]).then(function(e,ans){
                connection.query("select * from top5000 where ?", [artist.ans.artist], function(e,res){
                    console.log(res);
                })
            });
        }
    });
}