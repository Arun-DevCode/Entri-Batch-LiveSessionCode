const mongoose = require("mongoose");

//Step Schema - Blog
const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  imageurl: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    require: true,
  },
});

const BlogModel = mongoose.model("blogs", BlogSchema);

module.exports = BlogModel;
