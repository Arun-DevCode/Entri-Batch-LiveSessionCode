import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }

  async function handleUserRegister(event) {
    event.preventDefault();
    // Field validation
    if (!formData.email || !formData.password) {
      return alert("Fill all fields.");
    }
    try {
      const response = await fetch("http://localhost:8142/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // Validation
      if (!data) {
        throw new Error("failed to register!");
      }
      alert(data.message);
      localStorage.setItem("accessToken", data.token);
      console.log(data);
    } catch (error) {
      alert(error.message || "An error occured while registering..");
    }
  }
  return (
    <>
      <section className="flex justify-center items-center h-svh">
        <div className="shadow p-4 rounded-lg border border-gray-200">
          <h1 className="text-center text-2xl font-semibold">Sign In</h1>
          <p className="text-center text-gray-500 my-2">
            Signin with open account
          </p>

          {/* Login Form */}
          <form className="flex flex-col">
            {/*Email*/}
            <div className="flex flex-col space-y-3.5">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                name="email"
                onChange={handleInputChange}
                placeholder="johndoe@gmail.com"
                className="px-3 py-3 border border-gray-200 rounded-lg"
              />
            </div>
            {/*Password*/}
            <div className="flex flex-col space-y-3.5 my-2.5">
              <label htmlFor="Email">Password</label>
              {/*Show password*/}
              <div className="flex justify-between border border-gray-200 rounded-lg px-3 py-3 r">
                <input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  placeholder="johndoe@2025"
                  className="border-none focus:outline-none grow"
                />
                <button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <Eye className="text-gray-500" />
                  ) : (
                    <EyeOff className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <span className="text-red-500 self-end">Forgot Password?</span>

            <button
              type="submit"
              onClick={handleUserRegister}
              className="bg-emerald-500 rounded-full text-white py-2.5 px-3 text-center my-3"
            >
              Sign In
            </button>
            <span>
              Don't you have an account yet?{" "}
              <Link
                to={"/register"}
                className="text-emerald-500 cursor-pointer"
              >
                Login here
              </Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
