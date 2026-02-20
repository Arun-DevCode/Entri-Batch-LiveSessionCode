import { createContext } from "react";

const Counter = createContext({ count: 0, setCount: () => {} });

export default Counter;
