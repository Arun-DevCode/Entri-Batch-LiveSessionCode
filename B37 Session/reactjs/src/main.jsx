import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import AppRouter from "./routes/routes.jsx";
import { Provider } from "react-redux";
import AppStore from "./store/store.jsx";
import ThemePage from "./themePage.jsx";
import Products from "./components/Products.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Products />
  </StrictMode>,
);
