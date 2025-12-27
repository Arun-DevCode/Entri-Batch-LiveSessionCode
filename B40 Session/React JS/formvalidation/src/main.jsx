import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RegisterForm from "./components/RegisterForm.jsx";

import { RouterProvider } from "react-router";
import AppRouter from "./router/AppRouter.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main>
      <RouterProvider router={AppRouter} />
    </main>
  </StrictMode>
);
