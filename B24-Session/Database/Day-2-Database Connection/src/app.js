import Express from "express";
import dotenv from "dotenv";

// Import
import DBConnection from "./config/db.config.js";
import UserModel from "./models/users.model.js";

//App Setup
const app = Express();

//middleware
app.use(Express.json()); // body parser

// App Route
// 1. create users account
app.post("/create-account", (req, res) => {
  const userData = req.body || {};

  try {
    const response = UserModel.create(userData);
    // res
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

//env load
dotenv.config({ path: "./src/.env" });

// DB CONNECT
DBConnection();

// Listen
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running.. on http://localhost:${PORT}`);
});
