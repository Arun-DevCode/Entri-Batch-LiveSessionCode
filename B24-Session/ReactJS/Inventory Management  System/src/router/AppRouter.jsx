import { createBrowserRouter } from "react-router";

// Pages
import InventoryList from "../pages/InventoryList"; // Search + Filter + List
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/Dashboard";
import AddInventoryForm from "../components/AddInventoryForm";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/create-account",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard/inventory",
    element: <Dashboard />,
    children: [
      {
        path: "add-product",
        element: <AddInventoryForm />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default AppRouter;
