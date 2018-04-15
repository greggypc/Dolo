// var User = require('./user.js');
// // var Item = require('./item.js');
// var Category = require('./category.js');

module.exports = function(sequelize, DataTypes) {
  var Donation = sequelize.define("Donation", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    item_categoryID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Item_Categories',
        key: 'id'
      }
    },
    uid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
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
    closed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations defined here
        models.Donation.hasOne(models.Item_Category);
        models.Item_Category.belongsTo(models.Donation);
        models.Donation.hasMany(models.Picture);
        models.Picture.belongsTo(models.Donation);
      } 
    }
  });
  return Donation;
};