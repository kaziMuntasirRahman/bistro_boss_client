import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProvider";

const AdminHome = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <Helmet>
        <title>Dashboard | Admin Home</title>
      </Helmet>
      {/* welcome note */}
      <h1 className="text-[#151515] text-[32px] font-semibold font-['Cinzel']">Hi, Welcome Back <strong>{user?.displayName}</strong>!</h1>
    </div>
  );
};

export default AdminHome;