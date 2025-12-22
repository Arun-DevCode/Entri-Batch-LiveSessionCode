import { Link } from "react-router";

function DashboardPage() {
  return (
    <>
      <h1>Welcome to Dashboard Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, rem
        porro harum autem tenetur qui provident. Enim ratione facilis, quis quod
        omnis molestias non recusandae dolores doloribus cupiditate corrupti
        quia.
      </p>

      <Link to={"/contact"}>Go to Contact page</Link>
    </>
  );
}

export default DashboardPage;
