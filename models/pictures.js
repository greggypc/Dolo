// var Item = require('./item.js');

module.exports = function(sequelize, DataTypes) {
  var Pictures = sequelize.define("Pictures", {
    source: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    donationID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Donations',
        key: 'id'
      }
    },
  });
  return Pictures;
};