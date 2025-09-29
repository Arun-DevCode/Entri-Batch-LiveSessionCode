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
const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: false,
  },
  password: {
    type: String,
    require: true,
  },
  mobileNumber: {
    type: Number,
    require: false,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
