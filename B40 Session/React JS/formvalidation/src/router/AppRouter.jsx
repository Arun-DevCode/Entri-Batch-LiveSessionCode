import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import ContactPage from "../pages/ContactPage";
import UsersList from "../pages/UsersList";
import UserPage from "../pages/UserPage";
import RegisterForm from "../components/RegisterForm";

// Error Page
import NotFoundPage from "../pages/NotFoundPage";
import OverviewPage from "../pages/Dashboard/OverviewPage";

// App Router Setup / Config

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard-page",
    element: <DashboardPage />,
    children: [
      {
        path: "/dashboard-page/overview",
        element: <OverviewPage />,
        errorElement: <h1>No overview page found</h1>,
      },
      {
        path: "/dashboard-page/Register",
        Component: RegisterForm,
        errorElement: <h1>You Provided wrong UserID</h1>,
      },
    ],
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/list-users",
    Component: UsersList,
  },
  {
    path: "/list-users/:userId",
    Component: UserPage,
    errorElement: <h1>You Provided wrong UserID</h1>,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default AppRouter;
