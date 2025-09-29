const mongoose = require("mongoose");

// Schema
// const userSchema = mongoose.Schema({
//   fullName: String,
//   username: String,
//   email: String,
//   password: String,
//   mobileNumber: Number,
// });

// Type 2 : schema creation
const productSchema = mongoose.Schema({
  id: {
    type: Number,
    require: true,
    index: true,
  },
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  rating: {
    rate: {
      type: Number,
      require: true,
    },
    count: {
      type: Number,
      require: true,
    },
  },
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
