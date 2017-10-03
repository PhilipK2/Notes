var fs = require("fs");
var opr = process.argv[2];
var amt = process.argv[3];

if (opr==="deposit"){
    fs.appendFile("bank.txt", amt, function(){
        console.log();       
    });
}
else if (opr==="withdraw") {
    fs.appendFile("bank.txt", "-"+amt, function(){

    });
}
else if (opr==="total"){
    fs.readFile("bank.txt", "utf8", function(e,d) {
        num= d.split(",");
        console.log("num");
    })
}
else if (opr==="lotto"){

}