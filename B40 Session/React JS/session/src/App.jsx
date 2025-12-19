import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Declare useEffect
  useEffect(() => {
    console.log("Ask user to login/register");
  }, [count]);

  // function IncrementCount() {
  //   setCount(count + 1);
  // }

  // function DecrementCount() {
  //   setCount(count - 1);
  // }

  return (
    <>
      <div>
        <h1>Welcome to Life Cycle Of React</h1>
        <h1>{count}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam
          beatae architecto deserunt eaque. Hic, explicabo fugiat. Libero ipsam
          quod eius placeat illum, quia rerum rem perferendis id adipisci a.
        </p>

        {count > 0 ? (
          <button onClick={DecrementCount}>-</button>
        ) : (
          <>
          <button onClick={DecrementCount}>-</button>
          <button onClick={IncrementCount}>+</button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
