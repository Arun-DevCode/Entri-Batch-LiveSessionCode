import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Virtual DOM
import "./index.css";
import App from "./App";
import Profile from "./profile";
import One from "./One";
import Products from "./Products";

// Ternary Operator alternative if..else
const isUserLoggedIn = true;

// const canRender = isUserLoggedIn ? <One /> : <h1>Please Register First!</h1>;
createRoot(document.getElementById("root")).render(<Products />);
