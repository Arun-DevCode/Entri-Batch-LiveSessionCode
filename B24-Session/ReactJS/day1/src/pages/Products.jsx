import React, { useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data) {
          console.log("failed to fetch data");
        }
        setProducts(data);
      });
  };

  console.log(products);

  return (
    <section>
      <button onClick={getAllProducts}>Get Product</button>

      <div className="grid grid-cols-4 gap-4">
        {products?.map((product) => {
          return (
            <div className="shadow" key={product.id}>
              <img src={product.image} alt="laptop back" />
              <h1>{product.title}</h1>
              <span>{product.price}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
