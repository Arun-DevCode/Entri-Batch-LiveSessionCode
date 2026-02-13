import { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState([]);

  // To get all Products
  const getAllProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json(); // JSON -> Object
      if (!data) {
        throw new Error("Failed to fetch Products!");
      }
      return data;
    } catch (error) {
      alert(error.message);
    }
  };

  // Trigger
  useEffect(() => {
    getAllProducts()
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) {
    return <h1>Loading Products..</h1>;
  }
  return (
    <div>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>Product Showcase</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {data.map((product) => (
            <li
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: product.inStock ? "#fff" : "#f9f9f9",
              }}
            >
              <div>
                <strong style={{ fontSize: "1.1rem" }}>{product.name}</strong>
                <p style={{ margin: "5px 0", color: "#666" }}>
                  Category: {product.category}
                </p>
              </div>

              <div style={{ textAlign: "right" }}>
                <span style={{ fontWeight: "bold", color: "#2c3e50" }}>
                  ${product.price.toFixed(2)}
                </span>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: product.inStock ? "green" : "red",
                    marginTop: "5px",
                  }}
                >
                  {product.inStock ? "● In Stock" : "○ Out of Stock"}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
