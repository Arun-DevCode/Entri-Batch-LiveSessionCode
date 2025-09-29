const express = require("express");

//Router setup
const UserRouter = express.Router();

// File Imports
const {
  handleUserRegister,
  getAllUsers,
} = require("../controllers/user.controller");

//Route path
UserRouter.post("/register", handleUserRegister);
UserRouter.get("/get-all-users", getAllUsers);

module.exports = UserRouter;
