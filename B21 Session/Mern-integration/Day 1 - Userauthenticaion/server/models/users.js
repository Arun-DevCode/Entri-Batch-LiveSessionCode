const mongoose = require("mongoose");

// Step 1 :  schema creation
const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
