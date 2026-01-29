import express from "express";

// Router Setup
const UserRouter = express.Router();

//Imports
import { createUserAccount } from "../controllers/user.controller.js";
import { userValidator } from "../validators/user.validator.js";
import ValidationHandler from "../middleware/validator.js";

// Route Group
UserRouter.post(
  "/create-account",
  userValidator,
  ValidationHandler,
  createUserAccount,
);

// export to app
export default UserRouter;
