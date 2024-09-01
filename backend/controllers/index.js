const sequelize = require("../config");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const category = require("../models/category");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
require("dotenv").config();
module.exports = {
  Search: async (req, res) => {
    const searchTerm = req.query.search;
    console.log("searchTerm", searchTerm);
    try {
      const filteredData = await Product.findAll({
        where: {
          name: {
            [Op.like]: "%" + searchTerm + "%",
          },
        },
      });
      res.json(filteredData);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getOneUser: (req, res) => {
    console.log("inside get one user in controller ", req.user.id);

    const id = req.user.id;
    User.findByPk(id)
      .then((data) => res.status(200).json(data || null))
      .catch((err) => res.status(500).send(err));
  },
  userSignup: async (req, res) => {
    const body = req.body;
    try {
      await User.create({ ...body, role: "user" });
      res.json({ message: "signUp successful" });
    } catch (error) {
      res.status(400).json({ error: "Login failed", details: error });
    }
  },
  userLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const token = jwt.sign({ id: user.id }, process.env.JW_SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Login successful", token });
    } catch (error) {
      res.status(400).json({ error: "Login failed", details: error });
    }
  },

  /////////////////////////////
  getAllProducts: (req, res) => {
    Product.findAll()
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).send(err));
  },
  addProduct: (req, res) => {
    Product.create(req.body)
      .then(() => res.send("a new Product is  inserted"))
      .catch((err) => res.status(500).send(err));
  },
  updateProduct: (req, res) => {
    const { id } = req.params;
    Product.update(req.body, {
      where: {
        id: id,
      },
    })
      .then(() => res.send("a Product is  updated"))
      .catch((err) => res.status(500).send(err));
  },
  deleteProduct: (req, res) => {
    const { id } = req.params;
    Product.destroy({
      where: {
        id: id,
      },
    })
      .then(() => res.send("a Product is  deleted"))
      .catch((err) => res.status(500).send(err));
  },
  getAllCategories: async (req, res) => {
    try {
      const result = await category.findAll();
      res.json(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
