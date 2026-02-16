import express from "express";

//Imports
import {
  createUserAccount,
  UserLogin,
} from "../controllers/user.controller.js";
import UserDataValidation from "../validators/users.validator.js";
import ValidatorHandler from "../middleware/validator.js"; // Incoming Data Validate

// Router Setup
const UserRouter = express.Router();

// User Routes

// 1. Create User Account
UserRouter.post(
  "/create-account",
  UserDataValidation,
  ValidatorHandler,
  createUserAccount,
);

// 2. Access User Account
UserRouter.post("/login", UserLogin);

// Export Router
export default UserRouter;
