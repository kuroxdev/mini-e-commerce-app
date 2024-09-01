const express = require("express");
require("dotenv").config();
require("./config");
require("./models");

const cors = require("cors");
const Router = require("./routers");

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/", Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
