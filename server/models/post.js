const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: true,
    default: "no photo added",
  },
  postedby: {
    type: ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
