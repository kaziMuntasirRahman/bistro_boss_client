import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Menu from "../pages/Menu";
import OurShop from "../pages/OurShop";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "../pages/PrivateRouter";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/shop',
        element: <OurShop />
      },
      {
        path: '/shop/:category',
        element: <OurShop />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: []
  },
])

export default router;