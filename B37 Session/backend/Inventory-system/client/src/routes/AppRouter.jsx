import { createBrowserRouter } from "react-router";
import { Suspense, lazy } from "react";
import ProductPage from "../pages/ProductPage";

//Lazy Imports
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

// App Router
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "*",
    element: <h1>NOT FOUND - 404</h1>,
  },
]);

export default AppRouter;
