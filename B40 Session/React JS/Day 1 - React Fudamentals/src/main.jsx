import { createRoot } from "react-dom/client";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const isUserRegistered = "Guest-User";

createRoot(document.getElementById("root")).render(
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
          <span>Register</span>
          {" "}
          <span>Login</span>
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
