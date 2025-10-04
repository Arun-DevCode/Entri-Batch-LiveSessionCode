const mongoose = require("mongoose");

//Step Schema - Blog
const BlogSchema = mongoose.Schema({
  Title: {
    type: String,
    require: true,
  },
  BlogImageURL: {
    type: String,
    require: true,
  },
  Description: {
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
