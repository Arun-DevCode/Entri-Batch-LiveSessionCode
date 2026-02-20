import express from "express";

//Imports
import {
  createUserAccount,
  UserLogin,
} from "../controllers/user.controller.js";
import UserDataValidation from "../validators/users.validator.js";
import ValidatorHandler from "../middleware/validator.js"; // Incoming Data Validate
import UserModal from "../model/user.model.js";

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

// 3. Get User By Name
UserRouter.get("/get-user", async (req, res) => {
  const response = req.body;
  const user = await UserModal.findOne({
    name: response.name,
  });
  console.log(user)
  console.log(response);
  if (!user) {
    return res.json({ error: true, message: "No User Found" });
  }

  res.json({ error: false, message: "User Found", data: user });
});

// Export Router
export default UserRouter;
