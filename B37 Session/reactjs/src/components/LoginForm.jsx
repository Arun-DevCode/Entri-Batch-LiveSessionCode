import React from "react";

function LoginForm() {
  return (
    <form action="">
      <h1>Login Form</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="e.g johndoe@gmail.com" />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder="e.g ********" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
