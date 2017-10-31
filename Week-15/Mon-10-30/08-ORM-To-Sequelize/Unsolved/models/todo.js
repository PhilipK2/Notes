// var Sequelize = require("sequelize");
// var sequelize1 = require('../config/config.json');

// var Todo = sequelize1.define("todo", {
//     text: {
//         type: Sequelize.STRING
//     },
//     complete: {
//     type: Sequelize.BOOLEAN
//     }
// }, {
//     timestamps: false
// });

// Todo.sync();

// module.exports = Todo;


// THIS ^ IS WHAT WE DID ON SATURDAY

module.exports = function(sequelize, DataTypes){
    var Todo = sequelize.define("Todo", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return Todo;
};