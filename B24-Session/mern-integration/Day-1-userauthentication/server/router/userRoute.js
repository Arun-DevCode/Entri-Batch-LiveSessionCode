import express from "express";

const UserRouter = express.Router();

// Imports
import { handleToCreateAccount } from "../controller/user.controller.js";

// Root Router
UserRouter.post("/register", handleToCreateAccount);

export default UserRouter;
