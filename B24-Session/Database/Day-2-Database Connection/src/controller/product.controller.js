import ProductModel from "../models/products.js";

// To get all products
export async function getAllProducts(req, res) {
  try {
    // Query to products
    const products = await ProductModel.find();
    if (!products && products.length === 0) {
      return res
        .json({ message: "failed to fetch all the products." })
        .status(404);
    }
    // respond to client
    res.json({ message: "fetched all the products", data: products });
  } catch (error) {
    console.log(error);
  }
}