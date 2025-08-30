import { useState } from "react";

function ProductList() {
  //   const productData = getAllProducts();
  const [productData, setProductData] = useState([]);

  async function getAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductData(data);
    return data;
  }
//   getAllProducts();
  console.log(productData);

  return (
    <>
      <div>
        <h1>Welcome to product Page</h1>
        {productData.map((product, index) => (
          <>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
          </>
        ))}
      </div>
    </>
  );
}

export default ProductList;
