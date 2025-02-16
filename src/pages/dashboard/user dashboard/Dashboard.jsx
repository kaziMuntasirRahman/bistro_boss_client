import { Outlet } from "react-router-dom";
import SideNavBar from "./SideNavBar";

const Dashboard = () => {
  return (
    <div className="max-w-[1600px] min-h-screen flex border border-black mx-auto before:bg-slate-400 after:bg-slate-400">
      <SideNavBar />
      <div className="p-[50px] pl-6 bg-green-50 flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;