// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var path = require('path');
var chirp = require('../public/js/chirp.js');

// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
app.get('/api/all', function(req,res){
 var dbQuery = "select* from chirps"
  });

  // Add a chirp
app.post("/api/new", function(req, res){
  
})

};
