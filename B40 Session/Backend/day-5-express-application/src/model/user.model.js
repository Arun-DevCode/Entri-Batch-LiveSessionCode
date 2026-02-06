import mongoose from "mongoose";

// User Schema
const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// User Collection
const UserModal = mongoose.model("users", UserSchema);

export default UserModal;
