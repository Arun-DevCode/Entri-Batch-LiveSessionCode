import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import Products from "./pages/Products.jsx";
// import Test from "./pages/Test.jsx";
// import Drilling from "./pages/Drilling.jsx";
import PostPage from "./pages/postpage";

createRoot(document.getElementById("root")).render(<PostPage />);
