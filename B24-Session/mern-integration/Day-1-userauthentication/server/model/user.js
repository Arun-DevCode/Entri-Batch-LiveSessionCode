import { Schema, model } from "mongoose";

// User Schema
const UserSchema = Schema({
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
  createdAt: {
    type: Date,
    require: false,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
});

const UserModel = model("users", UserSchema);

export default UserModel;
