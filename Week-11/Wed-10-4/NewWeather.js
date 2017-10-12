


// WRITE TO FILE OBJECT //
var fs = require("fs");
var statement = "Weather for: " + this.loc;

statement += "\nTemperature: " + this.temp;
statement += "\nHumidity: " + this.humidity;
statement += "\nType of Weather: " + this.skytext;
statement += "\nWeather for " + this.wind;

fs.appendFile("weather.txt", statement);


// INIT CODE TO FIND IF USER OR ADMIN // 
var user= process.argv[2];
var content;

initCode = function(){
    if(user = "user"){
        WeatherObj();
    }
    else{
        fs.readFile('./weather.txt', function read(err, data){
    if (err) {
        throw err;
    }
    else {
        content = data;
    }
    console.log(content);
});
    }
};

// ============= SOLVED ============ //

var weather = require("weather-js");

var UserSearch = function(name, location) {
    this.name = name;
    this.location = location;
    this.data = Date.now();

    this.getWeather = function (){

        weather.find({search: this.location, degreeType: "F" }, function(err,result){
            if (err) console.log (err);
            console.log(JSON.stringify(result, null, 2));
        });
    };
};

module.exports = UserSearch;


// =========== NEXT CODE ========== //
var WeatherAdmin = function(){

}

// ========== FINAL SECTION ========= // 
process.argv[2];
