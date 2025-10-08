import { createBrowserRouter } from "react-router";

//Imports
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import BlogPage from "../pages/BlogPage";
import CreateBlogForm from "../pages/Createblogpage";

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
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/create-blog",
    element: <CreateBlogForm />,
  },
]);

export default AppRouter;
