import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/products.controller.js";

//Router setup
const Router = express.Router();

//GET : To greetings to client
Router.get("/product", getAllProducts);

//POST : To create a product
Router.post("/create-product", createProduct);

//export router
export default Router;
