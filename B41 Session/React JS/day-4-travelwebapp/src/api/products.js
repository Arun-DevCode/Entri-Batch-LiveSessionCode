import axios from "axios";

async function getAllProducts() {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data; // updated products
}

export default getAllProducts;
