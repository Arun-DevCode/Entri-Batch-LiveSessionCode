import React, { useEffect } from "react";

function Post() {
  const [posts, setPosts] = React.useState([]);
  const [product, setProduct] = React.useState({
    id: "",
    price: 0,
  });

  // After inital mount , will call api for product
  useEffect(() => {
    async function getAllPost() {
      const res = await fetch(
        "https://69401651993d68afba6aedd2.mockapi.io/product"
      );
      const data = await res.json();
      setPosts(data);
    }

    getAllPost();
  }, [posts]);

  async function UpdateProductPrice(event) {
    event.preventDefault(); // stop default load

    const res = await fetch(
      "https://69401651993d68afba6aedd2.mockapi.io/product",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...product, price: Number(product.id) }),
      }
    );

    const data = await res.json();
    console.log(data);
  }

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    console.log(name, value);
    setProduct({ ...product, [name]: value }); // Two way data binding
  }
  console.log(posts);

  return (
    <>
      <form>
        <input
          type="text"
          name="id"
          placeholder="Provide Id to update"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="provide price"
          onChange={handleInputChange}
        />
        <button type="submit" onClick={UpdateProductPrice}>
          Update Product
        </button>
      </form>
      <div>
        {posts.map((product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Post;
