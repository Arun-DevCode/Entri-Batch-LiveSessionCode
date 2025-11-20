import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useState } from "react";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Live tracking
  const passWordStrength = watch("password", "");
  const feedbackText = watch("feedback", "");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-80 p-6 rounded-xl shadow-md"
      >
        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-center">Login</h2>
          <p className="text-md text-center text-gray-500">
            Sign in to your account.
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="text"
            {...register("email", {
              required: "Email is required!",
            })}
            placeholder="johndoe@gmail.com"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Password</label>
          <div className="flex space-x-3.5 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
              className="focus:outline-none"
            />
            <span>
              {!showPassword ? (
                <button onClick={() => setShowPassword(!showPassword)}>
                  Show
                </button>
              ) : (
                <button onClick={() => setShowPassword(!showPassword)}>
                  Hide
                </button>
              )}
            </span>
          </div>
          {/* Show Strength Password */}
          <div className="inline-flex space-x-2.5">
            {passWordStrength.length > 0 && (
              <input
                type="range"
                name="Strength"
                value={passWordStrength.length}
                readOnly
              />
            )}
            {passWordStrength.length > 0 ? (
              passWordStrength.length === 3 ? (
                <span>Poor</span>
              ) : passWordStrength.length === 6 ? (
                <span>Average</span>
              ) : passWordStrength.length === 10 ? (
                <span>Strong</span>
              ) : null
            ) : null}
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Feedback */}
        <div className="mb-2.5">
          <label className="block text-gray-600 mb-1">Feedback</label>
          <div className="relative">
            <textarea
              className="w-full p-2.5 border border-gray-300 rounded"
              placeholder="Write your feedback"
              maxLength={255}
              {...register("feedback", {
                required: "Feedback is required!",
                minLength: {
                  value: 10,
                  message: "Feedback must contain at least 10 characters",
                },
                maxLength: {
                  value: 250,
                  message: "Feedback can contain only 250 characters",
                },
              })}
            ></textarea>

            {/* Character Counter */}
            <p className="text-gray-500 absolute right-2.5 bottom-2.5 text-right text-sm">
              {feedbackText.length} / 250
            </p>
          </div>
          {errors.feedback && (
            <p className="text-red-500 text-sm">{errors.feedback.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>

        <Link to="/" className="mt-2.5 block text-center text-sm">
          Don't have an account?{" "}
          <span className="text-blue-600 underline font-medium">
            Click Here
          </span>
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
