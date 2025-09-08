//NODE JS SERVER STEP

// const http = require("http");

// const server = http
//   .createServer
//   // server incoming request handler
//   ();

// //Server run
// server.listen(4040, () => {
//   console.log("Server runing.");
// });

// Express Setup
const express = require("express");

//App Setup
const app = express();

//middleware
app.use(express.json());

//GET: To greetings
app.get("/", (request, response) => {
  response.end("Welcome to server!");
});

//GET : to product
// app.get("/product", (req, res) => {
//   res.json(productdata);
// });

//USER AUTHENTICATION - REGISTER & LOGIN
var storage = [];
// Register - User
app.post("/register", (req, res) => {
  const userData = req.body;
  try {
    //Check user valid
    if (!userData.name || !userData.password) {
      res.json({ message: "Username and password are required!" });
    }
    storage.push(userData);
    //Success Response to client
    res.json({
      message: "User Registered Success!",
      user: storage,
    });
  } catch (error) {
    res.json({ succes: false, message: error });
  }
});

//Login - User
app.post("/login", (req, res) => {
  const userData = req.body;
  try {
    if (!userData.name || !userData.password) {
      return res.json({ message: "Username and password are required!" });
    }

    // Find user in storage
    const user = storage.find(
      (u) => u.name === userData.name && u.password === userData.password
    );

    if (user) {
      res.json({ success: true, message: "User LoggedIn Success!" });
    } else {
      res.json({ success: false, message: "Invalid Credentials!" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

app.listen(4000, () => console.log("Express Server running.."));
