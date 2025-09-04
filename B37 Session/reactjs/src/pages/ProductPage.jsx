import { useLoaderData } from "react-router";

function ProductPage() {
  //Todo : To get all products
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>ProductPage</h1>
      <div className="p-12 max-w-sm">
        {data?.map((post) => (
          <li>{post.title}</li>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
