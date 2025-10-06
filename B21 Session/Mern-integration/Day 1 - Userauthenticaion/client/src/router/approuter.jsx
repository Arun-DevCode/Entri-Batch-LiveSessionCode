import { createBrowserRouter } from "react-router";

//Imports
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

// App Router Step
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default AppRouter;
