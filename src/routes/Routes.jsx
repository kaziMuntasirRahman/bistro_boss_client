import { createBrowserRouter } from "react-router-dom";
import DashBoardErrorPage from "../pages/dashboard/shared/DashBoardErrorPage";
import Dashboard from '../pages/dashboard/user dashboard/Dashboard';
import DashboardHome from '../pages/dashboard/user dashboard/Home';
import ContactUs from "../pages/landing pages/ContactUs";
import Home from "../pages/landing pages/Home";
import Login from "../pages/landing pages/Login";
import Menu from "../pages/landing pages/Menu";
import OurShop from "../pages/landing pages/OurShop";
import Register from "../pages/landing pages/Register";
import Root from "../pages/landing pages/Root";
import ErrorPage from "../pages/shared/ErrorPage";
import MyCart from "../pages/dashboard/user dashboard/MyCart";
import AddReview from "../pages/dashboard/user dashboard/AddReview";
import AllUsers from "../pages/dashboard/admin dashboard/AllUsers";

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
    path: 'dashboard',
    element: <Dashboard />,
    errorElement: <DashBoardErrorPage />, // this error element isn't workin'
    children: [
      {
        path: '',
        element: <DashboardHome />
      },
      {
        path: 'my-cart',
        element: <MyCart />
      },
      {
        path: 'add-review',
        element: <AddReview />
      },
      // admin routes
      {
        path: 'admin/all-users',
        element: <AllUsers />
      }
    ]
  }
]);

export default router;
