const express = require("express");
const morgan = require("morgan");
const bcrypt = require("bcrypt");

// File Imports
const DBConnector = require("./config/db");
const UserModel = require("./models/users");

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
    const UserData = await UserModel.find({ email: email });

    // Validation
    if (!UserData) {
      return res
        .status(404)
        .json({ success: false, message: "No User data found!" });
    }
    // Success res to client
    res.status(200).json({
      success: false,
      message: "User data fetched success..",
      Users: UserData,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error!" });
  }
});
//Step 3 : List all user with authentication

// Database Connection
DBConnector();

//Server listen
app.listen(3000, () => console.log("Server Running.."));
