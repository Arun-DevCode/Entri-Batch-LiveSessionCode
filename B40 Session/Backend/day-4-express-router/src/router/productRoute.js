import express from "express";

//Imports
import validateUserRole from "../middleware/validation.js";

// User Router Setup
const ProductRouter = express.Router();

// Product API Endpoints - Slug
ProductRouter.get("/get-all-products", validateUserRole, (req, res) =>
  res.json({ message: "fetched all products." }),
);

// Export User Router
export default ProductRouter;
