import { Link, Outlet } from "react-router";

function ProductPage() {
  return (
    <div>
      <h1>Welcome to Product Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        possimus placeat? Officia inventore esse ea laboriosam dolores, quas
        quam dicta porro a! Consequatur tempora amet deserunt omnis placeat!
        Consectetur, quod.
      </p>

      <h1>Child Route : Mobile</h1>
      <Outlet />
      <Link to={"/"}>Back to home page</Link>
    </div>
  );
}

export default ProductPage;
