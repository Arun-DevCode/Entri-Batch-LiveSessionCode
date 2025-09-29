const express = require("express");

//File Exports
// const router = require("./src/views/routes");
const connectwithDB = require("./src/config/dbconnect");
const UserRouter = require("./src/views/userRoutes");
const ProductModel = require("./src/models/product");
//App Setup
const app = express();

//middleware
app.use(express.json()); //body parser

//Product Route
app.get("/products", async (req, res) => {
  const resultIndex = await ProductModel.createIndex({ price: 1 });
  const productData = await ProductModel?.find({ price: 109.95 });
  
  console.log(resultIndex);
  console.log(productData);

  if (productData) {
    res.status(200).json(productData);
  } else {
    res.status(400).json("Failed to fetch product data!");
  }
});

//App Router
// app.use(router);
app.use(UserRouter); // User router

// Database connection
connectwithDB();

//PORT NO
const PORTNO = 4000;
//App listen
app.listen(PORTNO, () => {
  console.log(`Server running on http://localhost:${PORTNO}/`);
});
