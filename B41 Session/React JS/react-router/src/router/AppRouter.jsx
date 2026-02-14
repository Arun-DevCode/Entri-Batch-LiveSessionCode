import { createBrowserRouter } from "react-router";

//Import Pages
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import MobilePage from "../pages/MobilePage";
import AdminPage from "../pages/AdminPage";
import SearchPage from "../pages/SearchPage";
import UsersPage from "../pages/UsersPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

//import loaders
import {
  getAllUsers,
  getUserByName,
  createUserAccount,
} from "../Loader/UsersLoader";
import ViewUserDetails from "../pages/ViewUserDetails";
import UserRegister from "../pages/UserRegister";
import FeedbackForm from "../pages/FeedbackForm";

function RouteProtection({ children }) {
  const isUserLoggedin = true;
  // valid permission
  if (!isUserLoggedin) {
    return <h1>You don't have permission</h1>;
  }
  return children;
}

// Router setup
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
    children: [
      {
        path: "/product/mobile",
        Component: MobilePage,
      },
    ],
  },
  {
    path: "/admin-page",
    element: (
      <RouteProtection>
        <AdminPage />
      </RouteProtection>
    ),
  },
  {
    path: "/search",
    element: <SearchPage />,
    loader: getUserByName,
  },
  {
    path: "/users",
    element: <UsersPage />,
    loader: getAllUsers,
  },
  {
    path: "/user/details/:userId",
    element: <ViewUserDetails />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    action: createUserAccount,
  },
  {
    path: "/user-register",
    element: <UserRegister />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/feedback",
    element: <FeedbackForm />,
  },
  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>,
  },
]);

export default AppRouter;

/*
  Route - /home , /product, /order-page ,/payment

  Route - Object

{
  path : "/product",
  element : <ProductPage/>
  Component : ProductPage
}
*/
