const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Category = sequelize.define("Category", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;
