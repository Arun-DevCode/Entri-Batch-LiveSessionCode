import { Link } from "react-router";

function HomePage() {
  return (
    <div>
      <h1>Welcome To Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nemo.
        Similique architecto exercitationem unde perferendis nam provident.
        Natus possimus maiores mollitia quos doloremque. Provident in
        dignissimos asperiores quia quasi ducimus.
      </p>
      <Link to={"/search"}>Go To Search Page</Link>
    </div>
  );
}

export default HomePage;
