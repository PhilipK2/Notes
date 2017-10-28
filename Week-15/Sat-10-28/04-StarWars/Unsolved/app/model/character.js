var Sequelize = require("sequelize");
var sequelize2 = require('../config/connection.js');

var character = sequelize2.define("character", {
    routeName: {
        type: Sequelize.STRING 
    },
    name: {
        type: Sequelize.STRING 
    },
    role: {
        type: Sequelize.STRING 
    },
    age: {
        type: Sequelize.INTEGER
    },
    forcePoints: {
        type: Sequelize.INTEGER 
    },
});

character.sync();

module.exports = character;