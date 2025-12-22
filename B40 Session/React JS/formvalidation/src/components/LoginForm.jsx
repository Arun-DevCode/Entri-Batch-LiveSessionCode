import { useForm } from "react-hook-form";
import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // form declare

  const formSubmit = (data) => {
    console.log(errors.email); // console entire form errors
    console.log("Form Submitted:", data);
  };
  return (
    <section>
      <div className="container mx-auto my-12 p-12">
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="max-w-md flex flex-col"
        >
          {/*Email Field*/}
          <div className="flex flex-col gap-4">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              placeholder="john@doe.com"
              name="email"
              className="border border-gray-200 px-5 py-2 mb-2"
              {...register("email", {
                required: "Email is required",
              })}
            />
          </div>
          {/* Email Error */}
          <div className="my-1">
            {errors.email && (
              <span className="text-red-600 font-medium">
                {errors.email.message}
              </span>
            )}
          </div>
          {/*Password Field*/}
          <div className="flex flex-col gap-1.5 relative">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="johndoe@2025"
              name="password"
              className="border border-gray-200 px-5 py-2"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Password must not exceed 10 characters",
                },
              })}
            />
            <div className="absolute right-3 bottom-2">
              {!showPassword ? (
                <EyeOff
                  size={22}
                  className="text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <Eye
                  size={22}
                  className="text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          {/*Password Error*/}
          <div className="my-1">
            <span className="text-red-500 font-medium capitalize">
              {errors.password && (
                <span className="text-red-500 font-medium capitalize">
                  {errors.password.message}
                </span>
              )}
            </span>
          </div>
          <button
            type="submit"
            className="text-md font-medium bg-blue-500 text-center rounded hover:bg-blue-600 text-white px-5 py-2 my-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
