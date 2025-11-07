import { Router } from "express";

// User Router
const UserRouter = Router();

// File Imports
import UserActions from "../controllers/user.controller.js";
import authenticate from "../middleware/authenticate.js";

// User Enpoints
UserRouter.post("/register", UserActions.hanldeUserRegister);
UserRouter.post("/login", UserActions.handleUserLogin);
UserRouter.get("/get-all-products", authenticate, (req, res) => {
  res.json({ message: "fetched all products" });
});

export default UserRouter;
