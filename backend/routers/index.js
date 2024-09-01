const express = require("express");
const Router = express.Router();
const authenticate = require("../middleware");
const {
  Search,
  userSignup,
  userLogin,
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getOneUser,
  getAllCategories,
} = require("../controllers");
Router.post("/signup", userSignup);
Router.post("/login", userLogin);
Router.get("/user/me", authenticate, getOneUser);

Router.get("/products", getAllProducts);
Router.post("/products", authenticate, addProduct);
Router.put("/products/:id", updateProduct);
Router.delete("/products/:id", deleteProduct);

Router.get("/categories", getAllCategories);

Router.get("/search", Search);

module.exports = Router;
