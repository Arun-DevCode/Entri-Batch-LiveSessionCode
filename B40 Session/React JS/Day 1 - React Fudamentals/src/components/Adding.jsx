import React, { useEffect } from "react";

function Adding() {
  const [active, setActive] = React.useState(0);

  // After first mount, will run
  useEffect(() => {
    document.title = `Effect update is ${active}`;
  }, [active]);

  function updateMSG() {
    setActive(active + 1);
  }
  return (
    <div>
      <h1>{active}</h1>
      <button onClick={updateMSG}>Update MSG</button>
    </div>
  );
}

export default Adding;
