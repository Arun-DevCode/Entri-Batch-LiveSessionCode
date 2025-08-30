import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  console.log("Component Mount Started!");
  const [values, setValues] = useState("Product List");
  const [product, setProduct] = useState([]);
  // Todo : After initial render/mount
  useEffect(() => {
    console.log("After Component Mount. I'm running a function!");
    getAllPosts();
  }, []);
  // Todo : To update state
  async function getAllPosts() {
    try {
      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/posts"
      // );
      // const data = await response.json();
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log("response:", data);
      setProduct(data);
    } catch (error) {
      console.log("Failed to fetch product data!", error);
    }
  }

  function updateState() {
    setValues("get product again!");
  }
  console.log(product);

  return (
    <div className="m-12">
      <h1>{values}</h1>
      <button
        onClick={updateState}
        className="px-4 py-1.5 bg-emerald-400 text-white"
      >
        Update
      </button>
      {console.log("Component Mount Ended!")}
    </div>
  );
}

export default App;
