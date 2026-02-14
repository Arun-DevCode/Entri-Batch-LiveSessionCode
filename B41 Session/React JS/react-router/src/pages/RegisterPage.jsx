import { Form, useActionData } from "react-router";

function RegisterPage() {
  // To get action response - createUserAccount
  const response = useActionData();

  if (response) {
    console.log(response);
    alert("Form Submitted");
  }

  return (
    <section className="flex justify-center items-center h-dvh">
      <Form
        method="post"
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <div>
          <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </Form>
    </section>
  );
}

export default RegisterPage;
