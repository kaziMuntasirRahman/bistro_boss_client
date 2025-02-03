import { Outlet } from "react-router-dom";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";

const Root = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;