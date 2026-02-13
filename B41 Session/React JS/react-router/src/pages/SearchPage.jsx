import React from "react";
import { Link } from "react-router";

function SearchPage() {
  return (
    <div>
      <h1>Welcome To Search Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nemo.
        Similique architecto exercitationem unde perferendis nam provident.
        Natus possimus maiores mollitia quos doloremque. Provident in
        dignissimos asperiores quia quasi ducimus.
      </p>
      <Link to={"/"}>Go To Home Page</Link>
    </div>
  );
}

export default SearchPage;
