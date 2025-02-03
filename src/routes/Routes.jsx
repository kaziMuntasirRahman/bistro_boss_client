import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Home";
import ErrorPage from "../Layout/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

export default router;