module.exports = function(sequelize, DataTypes) {
  var Item_Category = sequelize.define("Item_Category", {
    name: {
      type: DataTypes.STRING, 
      unique: true,
      allowNull: false
    } 
  }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  return Item_Category;
};