import { useState } from "react";
import Counter from "./CounterContext";

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <Counter.Provider value={{ count, setCount }}>{children}</Counter.Provider>
  );
}

export default CounterProvider;
