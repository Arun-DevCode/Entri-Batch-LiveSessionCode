import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Notification from "./notification.jsx";
import Products from "./Products.jsx";

createRoot(document.getElementById("root")).render(<Products />);
