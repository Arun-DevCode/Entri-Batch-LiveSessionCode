import { createBrowserRouter } from "react-router";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import MobileStore from "../pages/mobile-store";
import getAllProducts from "../services/getAllProducts";
import SearchPage from "../pages/SearchPage";
import StudentMarkForm from "../pages/StudentMarkForm";
import getAllStudents from "../API/students";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/product",
    Component: ProductPage,
    loader: getAllProducts,
    children: [
      {
        path: "mobile-store",
        Component: MobileStore,
      },
    ],
  },
  {
    path: "/search",
    Component: SearchPage,
  },
  {
    path: "/student/form",
    element: <StudentMarkForm />,
    loader: getAllStudents,
  },
]);

export default AppRouter;
