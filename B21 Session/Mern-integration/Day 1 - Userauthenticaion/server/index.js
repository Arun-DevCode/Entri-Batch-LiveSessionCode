const express = require("express");
const morgan = require("morgan");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// File Imports
const DBConnector = require("./config/db");
const UserModel = require("./models/users");
const authenticate = require("./middleware/authenticate");

//App setup
const app = express();

//middleware
app.use(express.json());
app.use(morgan());
//App Router

//Step 1 : User registeration - A/c
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Filed validation
    if (!username || !email | !password) {
      return res.json({ success: false, message: "All fiedls are required!" });
    }

    // Hashing Password
    const hashPassword = await bcrypt.hash(password, 10);

    // Store data
    // const newUser = await UserModel.create({
    //   username,
    //   email,
    //   password: hashPassword,
    // });

    const newUser = await UserModel({
      username,
      email,
      password: hashPassword,
    });

    await newUser.save();
    // Response to client
    res
      .status(201)
      .json({ success: true, message: "User Created Success", user: newUser });
  } catch (error) {
    console.log(error);
  }
});

//Step 2 : User authenticate - Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(404).json({ message: "All fields are required!" });
    }

    // Validate on User exist
    const isExistUser = await UserModel.findOne({ email: email });
    if (!isExistUser) {
      return res
        .status(404)
        .json({ message: "User not found.Please go to register!" });
    }

    // Generate secret key
    const payload = {
      username: isExistUser.username,
      email: isExistUser.email,
    };
    const token = await jwt.sign(payload, "entri@2025", { expiresIn: "24hr" });

    // Success res to client
    res.status(200).json({
      success: true,
      message: "User loggedin success..",
      accessToken: token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error!" });
  }
});

//Step 3 : List all user with authentication
app.get("/list-all-users", authenticate, async (req, res) => {
  console.log(req.user);
  try {
    const UsersList = await UserModel.find();

    //Validation
    if (!UsersList) {
      return res
        .status(404)
        .json({ success: false, message: "No Users Found!" });
    }

    res.status(200).json({
      success: true,
      message: "Users fetched success!",
      users: UsersList,
    });
  } catch (error) {
    return req.status(500).json({ success: false, message: "Internal Server" });
  }
});

// Database Connection
DBConnector();

//Server listen
app.listen(3000, () => console.log("Server Running.."));
