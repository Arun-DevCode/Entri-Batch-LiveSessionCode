import { useForm } from "react-hook-form";
import { useState } from "react";

function LoginForm() {
  // const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // live tracking
  const wordTracking = watch("feedback", 0);
  console.log(wordTracking);

  const onSubmit = (data) => {
    setPending(true);

    setPending(false);
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
            name="email"
            type="text"
            {...register("email", {
              required: "Email is required!",
              // pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              // validate: (value) => {
              //   if (!value.includes("@")) {
              //     return "Invalid Email address";
              //   }
              // },
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
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            {...register("password", {
              required: {
                value: true,
                message: "Email is required!",
              },
              min: {
                value: 8,
                message: "Password must be 8 characters",
              },
              max: {
                value: 10,
                message: "Password must be above 8+ characters",
              },
              pattern: {
                test: /[a-zA-Z0-9]/,
                message: "Password must contains 8 characters",
              },
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Content */}
        <textarea
          name="feedback"
          id="user-feedback"
          className="w-full p-2.5 border border-gray-300"
          placeholder="Write your feedback"
          {...register("feedback", {
            required: "feedback is required!",
            minLength: 10,
            max: {
              value: 250,
              message: "Feedback should contains only 250 characters!",
            },
          })}
        ></textarea>

        {errors.feedback && (
          <p className="text-red-500 text-sm mb-2.5">
            {errors.feedback.message}
          </p>
        )}
        <button
          type="submit"
          className="w-full disabled:cursor-not-allowed bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
