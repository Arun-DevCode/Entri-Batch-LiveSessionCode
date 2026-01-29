import { Schema, model } from "mongoose";

// User Schema
const userSchema = Schema({
  name: {
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
  createdAt: Date,
});

// Collection
const UserModel = model("users", userSchema);
export default UserModel;
