import { Link } from "react-router";

function HomePage() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, rem
        porro harum autem tenetur qui provident. Enim ratione facilis, quis quod
        omnis molestias non recusandae dolores doloribus cupiditate corrupti
        quia.
      </p>

      <Link to={"/dashboard-page"}>Go to Dashboard page</Link>
    </>
  );
}

export default HomePage;
