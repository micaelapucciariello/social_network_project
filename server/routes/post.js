const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post")

router.post("/createpost", requireLogin, (req, res) => {
  const { title, body } = req.body;
  if (!body || !title) {
    return res
      .status(422)
      .json({ error: "please complete all mandatory fields" });
  }
  const post = new Post({
    title,
    body,
    postedby: req.user,
  });

  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
