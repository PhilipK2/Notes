
// core node package for reading and writing files
var fs = require("fs");


//This Block of code will create a file called movies.txt
// It will then print inception die hard in the file
fs.writeFile("movies_junk.txt", "Inception, TMNT, Total Recall, Die Hard", function(err){
    if (err) {
        return console.log(err);
    }
    console.log("movies.txt was updated!");
});