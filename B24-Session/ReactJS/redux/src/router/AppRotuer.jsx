import { createBrowserRouter } from "react-router";
import Personalnfo from "../pages/personalnfo";
import UploadDocs from "../pages/uploadDocs";
import Process from "../pages/Process";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <h1>Welcome to Job Board Application</h1>,
  },
  {
    path: "/dashboard",
    Component: Process,
    children: [
      {
        path: "personal-information",
        Component: Personalnfo,
      },
      {
        path: "Upload-documents",
        Component: UploadDocs,
      },
    ],
  },
]);

export default AppRouter;

/*
 {
        path: "additional-questions",
      },
      {
        path: "review-application",
      },
*/
