var input = process.argv;

//Takes in all of the command line arguments
var inputString = process.argv;

//Parses the command line argument to capture the "operand"
var operand = inputString[2];
var num1 = inputString[3];
var num2 = inputString[4];

//Here is the variable we will be modifying with the new numbers
var outputNum;

//Determines the operand selected..
//Based on the operand we run the appropriate math on the two numbers
if (operand === "add") {
    outputNum = parseFloat(num1) + parseFloat(num2);
}
else if (operand === "subtract") {
    outputNum = parseFloat(num1) - parseFloat(num2);
}
else if (operand === "multiply") {
    outputNum = parseFloat(num1) * parseFloat(num2);
} 
else if (operand === "divide") {
    outputNum = parseFloat(num1) / parseFloat(num2);
}
else if (operand === "remainder") {
    outputNum = parseFloat(num1) % parseFloat(num2);
}
else if (operand === "exp") {
    outputNum = Math.pow(num1, num2);
}
else if (operand === "algebra") {
    outputNum = parseAlgebra(num1);
}
else {
    outputNum = "Not a recognized command";
}

//Prints the outputNumber
console.log(outputNum)