import { createRoot } from "react-dom/client";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const isUserRegistered = "Guest-User";
import Products from "./components/Products";
import Form from "./components/Form";
import Profile from "./components/Profile";

createRoot(document.getElementById("root")).render(<Profile />);
