// Select elements
const body = document.querySelector("body");
const gridContainer = document.querySelector(".grid-container");

// Fetch all products
async function getAllProduct() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    gridContainer.innerHTML = data
      .map(
        (item) => `
          <div class="product-card">
            <img src="${item.image}" width="80" />
            <h3>${item.title}</h3>
            <p>$${item.price}</p>
            <div style="display:flex; column-gap:12px">
            <button>Update</button>
            <button>Delete</button>
            </div>
          </div>
        `
      )
      .join("");
  } catch (error) {
    console.log("Error fetching products:", error);
  }
}

// Create a new product
async function createProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Laptop Backpack",
        price: 15.99,
        description:
          "Color may vary slightly. Body build varies, check product description for size info.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
        rating: {
          rate: 10.0,
          count: 500,
        },
      }),
    });

    const data = await response.json();
    console.log("Product created:", data);
  } catch (error) {
    console.log("Error creating product:", error);
  }
}

// Delete product
async function deleteProduct(productId) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    console.log("Product deleted:", data);
  } catch (error) {
    console.log("Error deleting product:", error);
  }
}

// Initial load
getAllProduct();
// createProducts();
// deleteProduct(1);
