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
import ManageBookings from "../pages/dashboard/admin dashboard/ManageBookings";
import ManageItems from "../pages/dashboard/admin dashboard/ManageItems";
import AddItems from "../pages/dashboard/admin dashboard/AddItems";
import AdminHome from "../pages/dashboard/admin dashboard/AdminHome";
import AdminRoute from "../pages/dashboard/admin dashboard/AdminRoute";
import PrivateRoute from "../pages/landing pages/PrivateRoute";

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
    errorElement: <DashBoardErrorPage />, // this error element isn't working
    children: [
      {
        path: '',
        element: <PrivateRoute><DashboardHome /></PrivateRoute>
      },
      {
        path: 'my-cart',
        element: <PrivateRoute><MyCart /></PrivateRoute>
      },
      {
        path: 'add-review',
        element: <PrivateRoute><AddReview /></PrivateRoute>
      },
      // admin routes
      {
        path: 'admin',
        element: <AdminRoute><AdminHome /></AdminRoute>
      },
      {
        path: 'admin/all-users',
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: 'admin/manage-bookings',
        element: <AdminRoute><ManageBookings /></AdminRoute>
      },
      {
        path: 'admin/manage-items',
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
      {
        path: 'admin/add-items',
        element: <AdminRoute><AddItems /></AdminRoute>
      }
    ]
  }
]);

export default router;
