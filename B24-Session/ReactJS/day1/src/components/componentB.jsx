import React from "react";

function componentB(props) {
  console.log(props.name);
  return (
    <div>
      <h1>Component B</h1>
      <p>{props.name}</p>
    </div>
  );
}

export default componentB;
