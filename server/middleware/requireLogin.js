const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../valuekeys.js");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "you must be logged in" });
  }

  const token = authorization.replace('Bearer ','');
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      res.status(401).json({ error: "you must be logged in" });
    }

    console.log("PAYLOAD " + payload.id)
    const { id } = payload
    User.findById(id).then((userdata) => {
      req.user = userdata;
      console.log(req.user)
      next();
    });
  });
};
