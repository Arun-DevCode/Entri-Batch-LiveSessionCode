import Express from "express";

// Router Setup
const UserRouter = Express.Router();

// Imports
// import UserCollection from "../models/userModel.js";

// User Route Setup

//1. Create-Account
UserRouter.post("/create-account", (req, res) => {
  const accountInfo = req.body;

  // validation
  if (!accountInfo) {
    return res.status(404).json({ message: "User info is required!" });
  }

  // Store user info
  UserCollection.push(accountInfo);

  //Response
  res.status(201).json({ message: "User account created!", accountInfo });
});
  
// 5. Get-all-user
UserRouter.get("/get-all-users", (req, res) => {
  // validation
  if (!UserCollection) {
    return res.json({ message: "No User Info Found." });
  }
  // response
  res
    .status(200)
    .json({ message: "fetched all user info", users: UserCollection });
});

//2. update-profile
UserRouter.put("/update-profile", (req, res) => {
  res.json({ message: "User Profile Updated.." });
});

//3. forget-password
UserRouter.patch("/forget-password", (req, res) => {
  res.json({ message: "Password Updated.." });
});

//4. delete-account
UserRouter.delete("/delete-account", (req, res) => {
  res.json({ message: "User Account Deleted!" });
});

//Export
export default UserRouter;
