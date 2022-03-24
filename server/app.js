const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./valuekeys.js");

require("./models/user");

app.use(express.json());
app.use(require("./routes/auth.js"));

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

app.listen(PORT, () => {
  console.log("server running at port: " + PORT);
});
