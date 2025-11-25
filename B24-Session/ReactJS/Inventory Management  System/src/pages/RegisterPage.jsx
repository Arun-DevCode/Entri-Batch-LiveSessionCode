import { Package } from "lucide-react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    // Handle registration logic here
    const response = await fetch(
      "https://6925447482b59600d722ec31.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          password: data.password,
          agreeToTerms: data.agreeToTerms,
        }),
      }
    );

    // Validation
    if (!response) {
      toast("No response found!");
    }

    // Local Storage - User
    localStorage.setItem("user", data.email);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleRegister();
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Registration form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-xl">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Package size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">InvTrack</h1>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Create Account
            </h2>
            <p className="text-gray-600 mb-8">
              Sign up now to start managing your inventory efficiently.
            </p>

            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="mb-5">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: 3,
                  })}
                  name="fullName"
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-lg  outline-none transition ${
                    errors.fullName
                      ? "border border-red-500 focus:outline-none focus:border-red-500"
                      : "border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  }`}
                />
                <div className="my-3">
                  {errors.fullName && (
                    <span className="text-red-500 font-medium">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Email is required!",
                    pattern: /(?<=\w+@)/g,
                  })}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-lg  outline-none transition ${
                    errors.email
                      ? "border border-red-500 focus:outline-none focus:border-red-500"
                      : "border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  }`}
                />
                {/* Error Message */}
                <div className="my-3">
                  {errors.email && (
                    <span className="text-red-500 font-medium">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: "Password is required!",
                    minLength: 8,
                  })}
                  onKeyPress={handleKeyPress}
                  placeholder="Create a password"
                  className={`w-full px-4 py-3 rounded-lg  outline-none transition ${
                    errors.password
                      ? "border border-red-500 focus:outline-none focus:border-red-500"
                      : "border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  }`}
                />
                {/* Error Message */}
                <div className="my-3">
                  {errors.password && (
                    <span className="text-red-500 font-medium">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required!",
                    minLength: 8,
                  })}
                  onKeyPress={handleKeyPress}
                  placeholder="Confirm your password"
                  className={`w-full px-4 py-3 rounded-lg  outline-none transition ${
                    errors.confirmPassword
                      ? "border border-red-500 focus:outline-none focus:border-red-500"
                      : "border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  }`}
                />
                {/* Error Message */}
                <div className="my-3">
                  {errors.confirmPassword && (
                    <span className="text-red-500 font-medium">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="flex flex-col items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    {...register("agreeToTerms", {
                      required: "You must agree terms before proceeding.",
                    })}
                    className={`w-full px-4 py-3 rounded-lg  outline-none transition ${
                      errors.agreeToTerms
                        ? "border border-red-500 focus:outline-none focus:border-red-500"
                        : "border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    }`}
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the{" "}
                    <button
                      type="submit"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      onClick={() => console.log("Privacy clicked")}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Privacy Policy
                    </button>
                  </span>
                </label>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition">
                Sign Up
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to={"/"}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Warehouse image with branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-bl from-blue-500/60 to-blue-700/60 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1663047302474-c885cc9f68bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundPosition: "right",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Warehouse branding */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
          <div className="mb-8 flex items-center gap-4">
            <div className="bg-white p-4 rounded-xl shadow-2xl">
              <Package size={48} className="text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold">InvTrack</h1>
          </div>
          <p className="text-2xl font-light text-center max-w-md mb-12">
            Smarter Inventory Management
          </p>

          {/* Features list */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-white/20 rounded-full p-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg">Real-time inventory tracking</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-white/20 rounded-full p-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg">Advanced analytics & reports</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-white/20 rounded-full p-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg">Multi-warehouse support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
