import express from "express";
import { getAllProducts } from "../controller/product.controller.js";

// Router setup
const ProductRouter = express.Router();

// Get : All Products
ProductRouter.get("/get-all-products", getAllProducts); // SLUG

// Export router
export default ProductRouter;
