import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import ContactPage from "../pages/ContactPage";
import UsersList from "../pages/UsersList";
import UserPage from "../pages/UserPage";

// App Router Setup / Config

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard-page",
    element: <DashboardPage />,
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
]);

export default AppRouter;
