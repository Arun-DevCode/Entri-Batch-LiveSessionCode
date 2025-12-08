import React from 'react'

function Conditional() {
  return (
    <div>
      {isUserRegistered === true ? (
        <div>
          <h1>Login Form:</h1>
          <LoginForm />
        </div>
      ) : isUserRegistered === "Guest-User" ? (
        <div>
          <h1>Guest User </h1>
          <p>You logged in as Guest User</p>
          <div>
            <span>Register</span> <span>Login</span>
          </div>
        </div>
      ) : (
        <div>
          <h1>Create Account:</h1>
          <RegisterForm />
        </div>
      )}
    </div>
  );
}

export default Conditional