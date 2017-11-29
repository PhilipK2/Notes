module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  // Add a belongsTo association to Authors here
  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js

  Post.associate = function(models){
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};




// "use strict";

// module.exports = function(sequelize, DataTypes) {
//   var Task = sequelize.define("Task", {
//     title: DataTypes.STRING
//   });
  
//   Task.associate = function(models) {
//     // Using additional options like CASCADE etc for demonstration
//     // Can also simply do Task.belongsTo(models.User);
//     Task.belongsTo(models.User, {
//       onDelete: "CASCADE",
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   }
  
//   return Task;
// };