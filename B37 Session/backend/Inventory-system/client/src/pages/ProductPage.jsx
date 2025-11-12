import React from "react";

function ProductPage() {
  async function getAllProducts() {
    const response = await fetch("http://localhost:8142/get-all-products", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div>
      <h1>Welcome to Product page</h1>
      <button onClick={getAllProducts}>Get Products</button>
    </div>
  );
}

export default ProductPage;
