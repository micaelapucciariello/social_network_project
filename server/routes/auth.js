const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

router.get("/", (req, res) => {
  res.send("hello world");
});

router
  .post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
      res.status(422).json({ error: "missing data" });
    }
    User.findOne({ email: email }).then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "email already exists" });
      }

      const user = new User({
        email,
        password,
        name,
      });

      user
        .save()
        .then((user) => {
          res.json({ message: "user saved succesfully!" });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  })

module.exports = router;
