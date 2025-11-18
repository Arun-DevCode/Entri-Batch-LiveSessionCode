import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            type="email"
            placeholder="johndoe@gmail.com"
            {...register("email", {
              required: "Email is required!",
            })}
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
            type="password"
            placeholder="••••••••"
            {...register("password", {
              required: "Password is required!",
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
