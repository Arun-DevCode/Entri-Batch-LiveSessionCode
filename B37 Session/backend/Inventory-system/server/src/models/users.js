import { model, Schema } from "mongoose";

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
});

// User Collection / Model
const UserModel = model("users", UserSchema);

export default UserModel;
