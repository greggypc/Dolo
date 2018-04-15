module.exports = function(sequelize, DataTypes) {
  var Org_Category = sequelize.define("Org_Category", {
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
  return Org_Category;
};