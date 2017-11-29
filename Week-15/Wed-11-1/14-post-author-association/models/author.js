module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

 Author.associate = function(models){
   Author.hasMany(models.Post, {
     onDelete: "cascade"
   });
 };
 
  return Author;
};


// "use strict";

// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//     username: DataTypes.STRING
//   });

//   User.associate = function(models) {
//     User.hasMany(models.Task);
//   }
  
//   return User;
// };