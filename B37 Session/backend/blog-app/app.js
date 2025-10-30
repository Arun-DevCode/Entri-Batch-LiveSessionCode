import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";

// File Imports
import Products from "./src/models/products.js";

const app = express();

// Env config
dotenv.config();

// DB Connection
const dbName = process.env.MONGODB_DATABASE_NAME;
const dbUsername = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbCluster = process.env.MONGODB_CLUSTER_NAME;

const connection = mongoose.connect(`mongodb://localhost:27017/vision?`);
if (connection) {
  console.log("DB Connection Estabilished!");
} else {
  console.log("DB Not Connected!");
}

//middleware
// app.use(morgan);

app.get("/get-all-products", async (req, res) => {
  const result = await Products.find({ price: { $gt: 100 } }).limit(3);
  res.json(result).status(200);
});

app.listen(3000, () => {
  console.log("Server running..");
});
