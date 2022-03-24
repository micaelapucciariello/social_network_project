const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    res.status(422).json({ error: "missing data" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({ error: "email already exists" });
    }

    bcrypt.hash(password, 15).then((hashedPassword) => {
      const user = new User({
        email,
        password: hashedPassword,
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
  });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "missing data" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      res.status(422).json({ error: "invalid email or password" });
    }

    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          res.json({ message: "succesfully signed in!" });
        } else {
          res.json({ error: "invalid email" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
