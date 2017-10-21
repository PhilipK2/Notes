// Dependencies
var express = require("express");
// Create express app instance.
var app = express();
var PORT = 3002;

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:op/:num1/:num2", function(req, res) {
//THIS IS PUT IN LIKE LOCALHOST:3000/ADD/1/2
  // TODO parse out the variables from the request
  // Parameters are received from the URL
  console.log(req.params.op);
  var var1 = req.params.op;
  var var2 = parseInt(req.params.num1);
  var var3 = parseInt(req.params.num2);

  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (var1) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      result = var2 + var3;
      console.log(result);
      break;
    case "subtract":
      result = var2 - var3;
      console.log(result);
      break;
    case "multiply":
      result = var2 * var3;
      console.log(result);
      break;
    case "divide":
      result = var2 / var3;
      console.log(result);
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(3002, function(){
  console.log("Listening on PORT " + PORT);
});
