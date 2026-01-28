import express from "express";

const UserRouter = express.Router();

// Imports
import {
  handleToCreateAccount,
  handleUserLogin,
} from "../controller/user.controller.js";

// Root Router
UserRouter.post("/register", handleToCreateAccount);
UserRouter.post("/login", handleUserLogin);

export default UserRouter;
