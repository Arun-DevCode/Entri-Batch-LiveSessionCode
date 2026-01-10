import mongoose from "mongoose";

// User Schema
const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

// User Model
const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
