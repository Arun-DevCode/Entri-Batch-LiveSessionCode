import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //error state
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // To get input value and then update state
  const handleInputChange = (event) => {
    console.log("trigged input");
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value }); // two way data binding
  };

  // Submission form
  const handleFormSubmit = (event) => {
    const error = {};
    event.preventDefault();
    console.log("trigged function");
    // valid form
    if (!form) {
      alert("Please fill all the required fields.");
      return;
    }
    // Email field
    if (!form.email) {
      // update email error to state
      error.email = "Email is required";
      console.log("Email is required!");
    }else if(form.email.includes("@")) {
      error.email = "Invalid email address";
    }
    // check @ includes
    
    // Password field
    if (!form.password) {
      error.password = "Password is required!";
      console.log("Password is required!");
    }
    console.log(form);

    // update errors state
    setErrors(error);
  };

  console.log(errors);
  return (
    <section>
      <div className="container mx-auto my-12 p-12">
        <form action="" className="max-w-md flex flex-col">
          {/*Email Field*/}
          <div className="flex flex-col gap-4">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              placeholder="john@doe.com"
              name="email"
              className="border border-gray-200 px-5 py-2 mb-2"
              onChange={handleInputChange}
              // required
            />
          </div>
          {/*Email Error*/}
          <div className="my-1">
            {errors.email && (
              <span className="text-red-600 font-medium capitalize">
                {errors.email}
              </span>
            )}
          </div>
          {/*Password Field*/}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="johndoe@2025"
              name="password"
              className="border border-gray-200 px-5 py-2"
              onChange={handleInputChange}
              // required
            />
          </div>
          {/*Password Error*/}
          <div className="my-1">
            <span className="text-red-600 font-medium capitalize">
              {errors.password}
            </span>
          </div>
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="text-md font-medium bg-blue-500 text-center rounded hover:bg-blue-600 text-white px-5 py-2 my-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default App;
