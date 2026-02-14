import { Link } from "react-router";

function AdminPage() {
  return (
    <div>
      <h1>Welcome to Admin Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        possimus placeat? Officia inventore esse ea laboriosam dolores, quas
        quam dicta porro a! Consequatur tempora amet deserunt omnis placeat!
        Consectetur, quod.
      </p>

      <Link to={"/"}>Back to Product Page</Link>
    </div>
  );
}

export default AdminPage;
