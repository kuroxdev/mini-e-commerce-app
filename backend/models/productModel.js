const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config");
const User = require("./userModel");
const Category = require("./category");
//name,imageUrl,price,quantity,options(promotion,verified,deliveryCost,Available,no option),adminId,categoryId

const Product = sequelize.define(
  "Product",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    options: {
      type: Sequelize.ENUM(
        "promotion",
        "verified",
        "deliveryCost",
        "Available",
        "no option"
      ),
    },
  },
  {
    // Other model options go here
  }
);

User.hasMany(Product, { foreignKey: { allowNull: false } });
Product.belongsTo(User);

Category.hasMany(Product, { foreignKey: { allowNull: false } });
Product.belongsTo(Category);

module.exports = Product;
