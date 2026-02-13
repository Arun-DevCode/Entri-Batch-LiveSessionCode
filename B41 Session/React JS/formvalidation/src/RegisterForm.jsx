// // import Form from "react-hook-form";

// function RegisterForm() {
//   const form = Form.useForm(); // Declaration

//   const Submit = (formData) => {
//     console.log("Form Submitted:", formData);
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
//       <form className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
//         {/* Header */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 text-center">
//             Create Account
//           </h2>
//           <p className="text-sm text-gray-500 text-center mt-2">
//             Register to get started
//           </p>
//         </div>

//         {/* Name */}
//         <div className="mb-5">
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Full Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
//             placeholder="Enter your full name"
//             {...form.register("name")}
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-5">
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Email Address
//           </label>
//           <input
//             type="email"
//             name="email"
//             className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
//             placeholder="Enter your email"
//             {...form.register("email")}
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-6">
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
//             placeholder="Create a strong password"
//             {...form.register("password")}
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           onClick={Submit}
//           className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md"
//         >
//           Create Account
//         </button>

//         {/* Footer */}
//         <p className="text-center text-sm text-gray-600 mt-6">
//           Already have an account?
//           <span className="text-blue-600 font-semibold cursor-pointer ml-1 hover:text-blue-700 transition">
//             Login
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default RegisterForm;
import React from 'react'

function RegisterForm() {
  return (
    <div>
      
    </div>
  )
}

export default RegisterForm
