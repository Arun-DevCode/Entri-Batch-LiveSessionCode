import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const submit = async (formData) => {
    const res = await fetch(
      "https://698b59846c6f9ebe57bc6882.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const data = await res.json();

    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 to-teal-100 px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Join Us</h1>
          <p className="text-sm text-gray-500 mt-2">
            Create your account to get started
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              {...register("fullName", {
                required: {
                  value: true,
                  message: "full name is required!",
                },
              })}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition duration-200"
            />

            {formState.errors.fullName && (
              <p className="text-red-600 mt-1.5 px-1.5">
                {formState.errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Invalid email address!",
                },
              })}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition duration-200"
            />

            {formState.errors.email && (
              <p className="text-red-600 mt-1.5 px-1.5">
                {formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required!",
                },
              })}
              placeholder="Create a strong password"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition duration-200"
            />
            {formState.errors.password && (
              <p className="text-red-600 mt-1.5 px-1.5">
                {formState.errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "confirm password is required!",
                },
              })}
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition duration-200"
            />
            {formState.errors.confirmPassword && (
              <p className="text-red-600 mt-1.5 px-1.5">
                {formState.errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={handleSubmit(submit)}
            disabled={formState.isSubmitting}
            className={`w-full shadow-md mt-2 ${formState.isSubmitting ? "cursor-not-allowed bg-gray-500 tex-white py-3 px-4 rounded-lg" : "bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition duration-200 "}`}
          >
            {formState.isSubmitting ? "Submitting..." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?
          <span className="text-emerald-600 font-semibold cursor-pointer ml-1 hover:text-emerald-700 transition">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
