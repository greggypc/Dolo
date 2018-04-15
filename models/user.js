
//creating the user model
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    donor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: {
      type: DataTypes.STRING,
      validate: {
        len: [2]
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    },
    orgId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Orgs',
        key: 'id'
      }
    }
  }, {
      classMethods: {
        associate: function (models) {
          // associations defined here
          models.User.hasMany(models.Donation);
          models.Donation.belongsTo(models.User);
          models.User.hasMany(models.Request);
          models.Request.belongsTo(models.User);
        }
      }
    });

return User;
var Org = require('./org.js');

};