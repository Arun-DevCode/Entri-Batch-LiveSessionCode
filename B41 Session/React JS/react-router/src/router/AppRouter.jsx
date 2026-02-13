import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import NotFound from "../pages/Not-found";
import DashboardLayout from "../layouts/DashboardLayout";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/search",
    Component: SearchPage,
  },
  {
    path: "/admin/dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "/admin/dashboard/overview",
        element: <h1>Welcome to Overview Page rendered in Dashboard Root</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>You came to wrong path. Please Provide right path.</h1>,
  },
]);

export default AppRouter;
