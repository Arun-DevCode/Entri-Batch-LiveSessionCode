import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // form submission
  const handleFormSubmission = (formData) => {
    console.log(formData);
  };

  return (
    <section className="p-4">
      <div className="max-w-xl mx-auto mt-10 p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create an Account
        </h2>
        {/* Regsiter Form */}
        <form
          onSubmit={handleSubmit(handleFormSubmission)}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "first name is required!",
                  },
                  pattern: /[a-zA-Z]/g,
                })}
                placeholder="John"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              {/* First Name Error */}
              {/* Email Error */}
              <div className="my-1">
                {errors.firstName && (
                  <span className="text-red-600 font-medium">
                    {errors.firstName?.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                {...register("lastName", {
                  value: true,
                  message: "last name is required!",
                })}
                placeholder="Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required!",
                },
                validate: (validEmail) => validEmail.includes("@"),
              })}
              placeholder="john@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  validate: (data) => console.log(data),
                })}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="cofirmPassword"
                {...register("cofirmPassword", {
                  required: true,
                })}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                name="agreement"
                {...register("agreement", {
                  required: true,
                })}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 cursor-pointer"
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-200"
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegisterForm;
