import React from "react";

function LoginForm() {
  return (
    <div>
      <form action="#">
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
