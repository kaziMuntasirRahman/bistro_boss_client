import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import '../../styles/pan_loader.css';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location)

  if (loading) {
    return (
      <div className="scale-[3] w-full h-full bg-gray-800/50 fixed">
        <span className="loader" />
      </div>
    )
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to='/login' state={location.pathname} />;
};

export default PrivateRoute;
