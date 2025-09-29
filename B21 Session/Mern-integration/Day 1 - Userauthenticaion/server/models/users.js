const mongoose = require("mongoose");

// Step 1 :  schema creation
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
