import React from "react";
import { useSelector, useDispatch } from "react-redux";

function counter() {
  const count = useSelector((state) => state.counter.count);
  console.log(count);

  // trigger
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{count}</h3>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default counter;
