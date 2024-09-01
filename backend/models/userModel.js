const { DataTypes } = require("sequelize");
const sequelize = require("../config");
const bcrypt = require("bcrypt");
const saltRounds = 10; //required by bcrypt
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, saltRounds);
      },
    },
  }
);

module.exports = User;
