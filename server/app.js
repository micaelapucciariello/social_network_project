const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5001;
const { MONGOURI } = require("./valuekeys.js");



mongoose.connect(MONGOURI);

mongoose.connection.on("connected", () => {
  console.log("connected to server. Mongo DB");
});

mongoose.connection.on("error", () => {
  console.log("error connecting server. Mongo DB");
});

app.get("/", function (req, res) {
  res.send("config");
});

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth.js"));
app.use(require("./routes/post.js"));

app.listen(PORT, () => {
  console.log("server running at port: " + PORT);
});
