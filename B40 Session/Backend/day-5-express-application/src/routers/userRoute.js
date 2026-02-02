import express from "express";

//Imports
import {
  createUserAccount,
  UserLogin,
} from "../controllers/user.controller.js";

// Router Setup
const UserRouter = express.Router();

// User Routes

// 1. Create User Account
UserRouter.post("/create-account", createUserAccount);

// 2. Access User Account
UserRouter.post("/login", UserLogin);

// Export Router
export default UserRouter;
