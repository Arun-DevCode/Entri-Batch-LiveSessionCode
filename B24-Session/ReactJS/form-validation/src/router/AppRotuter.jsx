import { createBrowserRouter } from "react-router";
import Register from "../components/RegisterForm";
import Login from "../components/LoginForm";
import Product from "../pages/ProductPage";
import ProductDetailsPage from "../pages/ProductDetails";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: <Product />,
    children: [
      {
        path: "details",
        element: <ProductDetailsPage />,
      },
    ],
  },
  {
    path: "/contact",
    element: <ProductDetailsPage />,
  },
]);

export default AppRouter;
