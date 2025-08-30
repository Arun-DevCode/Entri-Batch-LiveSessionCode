function RegisterForm() {
  //Javascript Code
  //Todo : To submit user data
  // document.getElementsByTagName("button", FormSubmission);
  return (
    <form action="" className="ml-36 my-16 space-x-5">
      <h1>Register Form</h1>
      <div>
        <label htmlFor="Username">Username</label>
        <input type="text" placeholder="User name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="e.g johndoe@gmail.com" />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder="e.g ********" />
      </div>
      <button
        type="submit"
        // onClick={FormSubmission}
        className="bg-blue-500 px-5 py-2 rounded text-white font-medium"
      >
        Submit
      </button>
    </form>
  );
}

export default RegisterForm;
