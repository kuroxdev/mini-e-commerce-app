const sequelize = require("../config/");
const category = require("./category");
const Product = require("./productModel");
const User = require("./userModel");

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("All models were synchronized successfully.");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing models:", error);
//   });

// User.create({
//   firstName: "admin",
//   email: "admin@admin.com",
//   password: "admin123",
//   role: "admin",
// })
//   .then(() =>
//     console.log(
//       "============================================a new Product is  inserted"
//     )
//   )
//   .catch((err) => console.log(err));

// category
//   .create({
//     name: "electronics",
//   })
//   .then(() =>
//     console.log(
//       "============================================a new Product is  inserted"
//     )
//   )

// category
//   .create({
//     name: "cosmetics",
//   })
//   .then(() =>
//     console.log(
//       "============================================a new Product is  inserted"
//     )
//   );

//   .catch((err) => console.log(err));
// const products = [
//   {
//     name: "Smartphone",
//     description: "A high-end smartphone with a great camera",
//     price: 999.99,
//     categoryId: 1,
//     quantity: 10,
//     imageUrl:
//       "https://images-cdn.ubuy.co.in/634d031dba8fe623b47893cc-smart-phone-android-8-1-smartphone-hd.jpg",
//     options: "verified",
//     UserId: 1,
//     CategoryId: 1,
//   },
//   {
//     name: "Laptop",
//     description: "A powerful laptop for work and play",
//     price: 1299.99,
//     quantity: 14,
//     categoryId: 1,
//     imageUrl:
//       "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
//     options: "verified",
//     UserId: 1,
//     CategoryId: 1,
//   },
//   {
//     name: "Headphones",
//     description: "Noise-cancelling over-ear headphones",
//     price: 199.99,
//     categoryId: 1,
//     quantity: 5000,
//     imageUrl:
//       "https://i5.walmartimages.com/seo/Beats-Studio3-Wireless-Noise-Cancelling-Headphones-with-Apple-W1-Headphone-Chip-Matte-Black_d0f19be2-e68f-4b82-b95c-c37db53518ba_1.868e67b856407714e2c5405a7e2f094a.jpeg",
//     options: "verified",
//     UserId: 1,
//     CategoryId: 1,
//   },
//   {
//     name: "Smartwatch",
//     description: "A smartwatch with fitness tracking features",
//     price: 299.99,
//     categoryId: 1,
//     quantity: 800,
//     imageUrl:
//       "https://www.tunisianet.com.tn/363106-large/smart-watch-samsung-galaxy-fit3-gris.jpg",
//     options: "verified",
//     UserId: 1,
//     CategoryId: 1,
//   },
//   {
//     name: "Tablet",
//     description: "A tablet with a large display and long battery life",
//     price: 499.99,
//     categoryId: 1,
//     quantity: 700,
//     imageUrl:
//       "https://sc04.alicdn.com/kf/H335df3e1c50b4930bc31c1591fda5977b.jpg",
//     options: "verified",
//     UserId: 1,
//     CategoryId: 1,
//   },
// ];

// Product.bulkCreate(products)
//   .then(() =>
//     console.log(
//       "============================================a new Product is  inserted"
//     )
//   )
//   .catch((err) => console.log(err));
