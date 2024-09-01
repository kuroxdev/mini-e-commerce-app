const jwt = require("jsonwebtoken");

require("dotenv").config();
const authenticateToken = (req, res, next) => {
  console.log("req.headers", req.headers);
  if (!req.headers["authorization"]) {
    return res.sendStatus(403);
  }

  const token = req.headers["authorization"].split(" ")[1];

  if (!token) return res.sendStatus(403);

  jwt.verify(token, process.env.JW_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    console.log("userrr", user);
    req.user = user;

    next();
  });
};

module.exports = authenticateToken;
