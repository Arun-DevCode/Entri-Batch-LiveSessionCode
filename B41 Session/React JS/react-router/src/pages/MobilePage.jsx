import { Link } from "react-router";

function MobilePage() {
  return (
    <div>
      <h1>Welcome to Mobile Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        possimus placeat? Officia inventore esse ea laboriosam dolores, quas
        quam dicta porro a! Consequatur tempora amet deserunt omnis placeat!
        Consectetur, quod.
      </p>

      <Link to={"/product"}>Back to Product Page</Link>
    </div>
  );
}

export default MobilePage;
