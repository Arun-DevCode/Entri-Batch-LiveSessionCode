import { useState } from "react";

export default function UserRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorEmail, setErrorEmail] = useState("");
  const [errorLastName, setErrorLastName] = useState("");

  // Dynamically update form
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value, // Two Way data binding
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent load

    // Validation Here
    if (!formData.email) {
      return setErrorEmail("Email is required!");
    }
    if (!formData.lastName) {
      return setErrorLastName("lastName is required!");
    }
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-center">Create Account</h2>

        {/* First & Last Name */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="firstName"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="lastName"
              onChange={handleInputChange}
            />
            {errorLastName && <span>{errorLastName}</span>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="email"
            onChange={handleInputChange}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="password"
            onChange={handleInputChange}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
