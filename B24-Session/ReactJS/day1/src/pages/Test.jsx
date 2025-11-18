import React, { useEffect, useState } from "react";
import ComponentA from "./../components/componentA";
import ComponentB from "./../components/componentB";

function Test() {
  const [value, setValue] = useState(false);

  // UseEffect
  useEffect(() => {
    console.log("Mount is called!");
  });
  console.log("Component Mount");
  return (
    <div>
      <h1>Welcome to React Hooks</h1>
      <button onClick={() => setValue(!value)}>Call API</button>
    </div>
  );
}

export default Test;
