// var User = require('./user.js');
// // var Item = require('./item.js');
// var Category = require('./category.js');

module.exports = function(sequelize, DataTypes) {
  var Request = sequelize.define("Request", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    closed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    uid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    item_categoryID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Item_Categories',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isIn: [['material', 'service']]
      }
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations defined here
        models.Request.hasOne(models.Item_Category);
        models.Item_Category.belongsTo(models.Request);
        
      }
    } 
  });
  return Request;
};