import { useState } from "react";
import Display from "./Display";

function register() {
  const [userState, setUserState] = useState("");

  function updateState() {
    setUserState("State Updated!");
  }
  return (
    <div>
      <h1>{userState}</h1>
      <button onClick={updateState}>update local State</button>
      <Display status={userState} />
    </div>
  );
}

export default register;
