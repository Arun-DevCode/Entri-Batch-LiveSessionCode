import React from "react";

function RegisterForm() {
  return (
    <div>
      <form action="#">
        <div>
          <label htmlFor="Name">username</label>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <button>Create account</button>
      </form>
    </div>
  );
}

export default RegisterForm;
