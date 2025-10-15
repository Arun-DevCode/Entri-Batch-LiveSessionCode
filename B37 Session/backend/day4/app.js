// const express = require("express"); // Es5
import express from "express";

// File Imports
import UserRouter from "./src/views/userRoute.js";

// App setup
const app = express();
app.use(express.json());

// App Router
app.use(UserRouter);

// Welcome Route
app.get("/", (req, res) => {
  res.end("Welcome to server!");
});

// Server listening
app.listen(3000, () => {
  console.log("Server running..");
});
