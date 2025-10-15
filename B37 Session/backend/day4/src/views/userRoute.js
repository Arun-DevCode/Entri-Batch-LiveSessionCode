import express from "express";

//App Route
const UserRouter = express.Router();

//File Imports
import {
  UserRegister,
  UserLogin,
  getUserProfile,
} from "../controllers/user.controller.js";

//Routes
// To: User register
UserRouter.post("/register", UserRegister);
// To: User login
UserRouter.post("/login", UserLogin);
// To: get user profile
UserRouter.get("/get-user-profile", getUserProfile);

export default UserRouter;
