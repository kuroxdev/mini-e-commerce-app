import React, { useContext, useEffect, useState } from "react";
import "./CreateProduct.css";
import axios from "axios";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

function CreateProduct({ userId, fetch }) {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const token = useContext(AuthContext);

  async function getCategories() {
    const res = await axios.get("http://127.0.0.1:3000/categories");
    setCategories(res.data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  const [product, setProduct] = useState({
    name: "",
    imageUrl: "",
    price: "",
    quantity: "",
    options: "no option",
    UserId: userId,
    CategoryId: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "price" || name === "quantity" || name === "CategoryId") {
      value = Number(value);
    }
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:3000/products", product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/");
      fetch();
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="create-product">
      <h2>Create New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="options">Options</label>
          <select
            id="options"
            name="options"
            value={product.options}
            onChange={handleChange}
            required
          >
            <option value="no option">No Option</option>
            <option value="promotion">Promotion</option>
            <option value="verified">Verified</option>
            <option value="deliveryCost">Delivery Cost</option>
            <option value="Available">Available</option>
          </select>

          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="CategoryId"
            value={product.CategoryId}
            onChange={handleChange}
            required
          >
            <option>Choose a Category</option>
            {categories.map((category) => {
              return <option value={category.id}>{category.name}</option>;
            })}
          </select>
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;
