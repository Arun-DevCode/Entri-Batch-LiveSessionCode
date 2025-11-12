// import HomePage from "./pages/HomePage";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    name: "Testuser",
    password: "testuser@2025",
  });
  // var username;
  // function updateState(event) {
  //   setState({ ...state, [event.target.name]: event.target.value });
  //   console.log(state);
  // }

  return (
    <section className="flex  flex-col justify-center items-center h-svh">
      <div className="flex flex-col space-y-5">
        <input
          type="text"
          placeholder="Username"
          onChange={updateState}
          name="name"
          className="border border-gray-500 px-5 py-2.5 rounded"
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={updateState}
          className="border border-gray-500 px-5 py-2.5 rounded"
        />
        <button
          onClick={updateState}
          className="bg-sky-700 text-white rounded-lg py-2.5 uppercase"
        >
          update
        </button>
      </div>
      {/* User Details */}
      {
        <ul className="my-5">
          <li>Username: {state.name}</li>
          <li>Password: {state.password}</li>
        </ul>
      }
    </section>
  );
}

export default App;
