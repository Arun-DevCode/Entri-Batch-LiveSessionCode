import express from "express";
// import morgan from "morgan";
import mongoose from "mongoose";

const app = express();

// DB Connection
const connection = mongoose.connect("mongodb://localhost:27017/BlogsDB");
if (connection) {
  console.log("DB Connection Estabilished!");
} else {
  console.log("DB Not Connected!");
}

//middleware
// app.use(morgan());
app.listen(3000, () => {
  console.log("Server running..");
});
