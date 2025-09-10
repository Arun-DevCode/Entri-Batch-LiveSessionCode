//Todo : To greetings to client
function getAllProducts(req, res) {
  res.json({ message: "From controller" });
}
// Todo : To create a product
function createProduct(req, res) {
  const productData = req.body;
  res.json({ message: "product fetched!", products: productData });
}

export { createProduct, getAllProducts };
