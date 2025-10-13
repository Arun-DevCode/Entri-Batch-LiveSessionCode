// Express Route Step
const express = require("express");

//File imports
const storage = require("../db/storage");

// Router step
const UserRouter = express.Router();

// User Route
UserRouter.get("/get-all-profiles", (request, response) => {
  response.end(
    JSON.stringify({ message: "Profile fetched success", users: storage })
  );
});

// register
UserRouter.post("/register", (req, res) => {
  storage.push(req.body);
  res.end("User registered success..");
});

// login
UserRouter.post("/login", (req, res) => {
  res.end("User loggedin success..");
});

module.exports = UserRouter;
