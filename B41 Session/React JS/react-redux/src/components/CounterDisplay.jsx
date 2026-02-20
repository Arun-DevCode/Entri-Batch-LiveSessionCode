import { useContext } from "react";
import Counter from "../context/CounterContext";

function CounterInput() {
  const { count, setCount } = useContext(Counter);

  console.log(count);
  return (
    <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md">
      <label className="text-sm font-medium text-gray-600">
        Set Counter Value
      </label>
      <h1>{count}</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className="w-40 px-4 py-2 text-center border border-gray-300 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <p className="text-xs text-gray-500">Enter a number to update count</p>
    </div>
  );
}

export default CounterInput;
