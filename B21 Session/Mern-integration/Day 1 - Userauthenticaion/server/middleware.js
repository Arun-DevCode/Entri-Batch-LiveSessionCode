const express = require("express");
const morgan = require("morgan");

//App setup
const app = express();

// middleware-function: type

// built-in middleware
app.use(express.json());
// app.use(express.static("public"));

// custom middleware
function customMiddleware(req, res, next) {
  //   res.json("Welcome to middleware!");
  if (!req.body.username) {
    res.status(400).json("username required!");
  }
  console.log("middleware executed!");

  next(); // through
}

function greetings(req, res, next) {
  //   res.json({ message: "Hello Ravi! Welcome back" });
  console.log("Hello Ravi! Welcome back");

  next();
}

//Third-party middleware
app.use(morgan());

// to get list of users
app.post("/", customMiddleware, greetings, (request, respone) => {
  respone.json({ message: "success", user: request.body });
});

app.listen(3000, () => console.log("Server running.."));
