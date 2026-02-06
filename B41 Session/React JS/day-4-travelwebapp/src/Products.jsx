import React, { useState, useEffect } from "react";
import getAllProducts from "./api/products";

// const Products = [
//   {
//     id: 1,
//     name: "hand bag",
//     price: "150",
//   },
//   {
//     id: 2,
//     name: "Hearing",
//     price: "250",
//   },
// ];

function ProductPage() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
  }, []);

  return (
    <div>
      <h1>Product page</h1>
      <div>
        {Products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.category} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
