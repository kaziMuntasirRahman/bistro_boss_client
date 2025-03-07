import { Helmet } from "react-helmet-async";
import SectionHead from "../../../Components/dashboard/SectionHead";

const ManageBookings = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | Manage Bookings</title>
      </Helmet>
      <SectionHead title="At a Glance!" heading="Manage All Bookings" />
    </div>
  );
};

export default ManageBookings;