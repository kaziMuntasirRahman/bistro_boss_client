import { useContext } from "react";
import useAdmin from "../../../hooks/useAdmin";
import { AuthContext } from "../../../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();

  // Show loader when data is still loading
  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full bg-gray-800/50 fixed">
        <span className="loader" />
      </div>
    );
  }

  // If the user is logged in and is an admin, render the children components
  if (user && isAdmin) {
    return children;
  }

  // Otherwise, navigate to home page
  return <Navigate to="/" />;
};

export default AdminRoute;
