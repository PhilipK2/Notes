var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(err,data){
    var dataArr = data.split(",");
    for( i = 0 ; i < dataArr.length; i++){
        console.log(dataArr[i]);
    }
});