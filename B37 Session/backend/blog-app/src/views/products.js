import Express from "express";

// File Imports
import Products from "./src/models/products.js";

const ProductRouter = Express.Router();

ProductRouter.get("get-all-products", async (req, res) => {
  const result = await Products.find();
  console.log(Products);
  res.json(Products).status(200);
});
