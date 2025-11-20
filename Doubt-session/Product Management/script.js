const container = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(container);

async function getAllProduct() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  console.log("Product Count : ", data.length);
}

// async function createProducts() {
//   const response = await fetch(`https://fakestoreapi.com/products`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       id: 21,
//       title: "Laptops Backpack",
//       price: 15.99,
//       description:
//         "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
//       rating: {
//         rate: 10.0,
//         count: 500,
//       },
//     }),
//   });

//   const data = await response.json();
//   console.log(data);
// }

async function deleteProduct(productId) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
    {
      method: "DELETE",
      body: JSON.stringify({ id: productId }),
    }
  );
  const data = await response.json();
  console.log(data);
}

getAllProduct();
// deleteProduct(1);
// createProducts();

