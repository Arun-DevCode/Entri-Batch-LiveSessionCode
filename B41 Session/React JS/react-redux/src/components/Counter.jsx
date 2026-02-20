import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6 bg-gray-100">
      <h1 className="text-3xl font-bold">Counter App</h1>

      <div className="text-5xl font-semibold">{count}</div>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-6 py-2 bg-gray-600 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
