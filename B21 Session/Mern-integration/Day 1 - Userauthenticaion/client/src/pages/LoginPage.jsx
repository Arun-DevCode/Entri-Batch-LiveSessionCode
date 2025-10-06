import { Link } from "react-router";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  //! What we fixed here - add header config in request
  async function handleUserRegister(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      alert("Failed to Login User!");
    }
  }

  return (
    <section className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleUserRegister}
        method="post"
        className="p-6 max-w-2xl bg-white shadow rounded"
      >
        <div className="flex flex-col mb-1.5">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="entri@gmail.com"
            name="email"
            className="border border-gray-200 py-2.5 my-3 rounded px-4"
          />
        </div>
        <div className="flex flex-col mb-1.5">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="entri@2025"
            name="password"
            className="border border-gray-200 py-2.5 my-3 rounded px-4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white w-full rounded mt-2.5 font-medium px-5 py-2.5"
        >
          Login
        </button>
        <div className="mt-2">
          <span>Don't have an account?</span>
          <Link to="/register" className="text-blue-700 ml-2">
            Register
          </Link>
        </div>
      </form>
    </section>
  );
}

export default LoginPage;
