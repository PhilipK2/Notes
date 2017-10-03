var inquirer = require("inquirer");


function player(name, position, offense, defense){
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        if (math.floor(math.random() * 2) === 0) {
            this.offense++;
        } else {
            this.defense++;
        }
    };
    this.badGame = function () {};
    this.printStats = function () {
        console.log("\nName: " + this.name + "\nPosition: " + this.position + "\nOffense: " + 
        this.offense + "\nDefense: " + this.defense);
    };
};

var count = 0;
var playerArray = [];

var playerInput = function(){
    if (count<8) {
        console.log("NEW PLAYER");
        inquirer.prompt([
            {
              name: "name",
              message: "Player Name"
            }, {
              name: "position",
              message: "Player Position?"
            }, {
              name: "offense",
              message: "Offensive Stat"
            }, {
              name: "Defense",
              message: "Defensive Stat"
            }
          ])
    }
};


