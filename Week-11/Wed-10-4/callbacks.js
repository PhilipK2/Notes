var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

var myFunc = function(str, potaoto){
console.log(str);
potaoto();
}

// Write a function that runs a function argument if
// its other argument is truthy.

function dog(toe, junk){
    if(toe === true){
        junk();
    }
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

function name(F,V) {
    return function(){
        return F(V);
    }
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo uusing callbacks anywhere? Where?