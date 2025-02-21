import { useContext } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { CiShop } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoCalendar, IoCart, IoWalletOutline, IoWalletSharp } from "react-icons/io5";
import { AuthContext } from "../../../providers/AuthProvider";


const Home = () => {
  const { user } = useContext(AuthContext)
  const headItems = [
    {
      name: "Menu",
      value: 205,
      icon: <IoWalletOutline />,
      gradientColor: { from: "#BB34F5", to: "#FCDBFF" }
    },
    {
      name: "Shop",
      value: 103,
      icon: <CiShop />,
      gradientColor: { from: "#D3A256", to: "#FDE8C0" }
    },
    {
      name: "Contact",
      value: 103,
      icon: <BiPhoneCall />,
      gradientColor: { from: "#FE4880", to: "#FECDE9" }
    }
  ]

  return (
    <div>
      {/* welcome note */}
      <h1 className="text-[#151515] text-[32px] font-semibold font-['Cinzel']">Hi, Welcome Back!</h1>
      {/* headings */}
      <section className="w-full flex justify-between mt-6 mb-8">
        {
          headItems.map(item =>
            <div
              key={item.name}
              className="w-[398px] h-[150px] bg-gradient-to-r from-[#bb34f5] to-[#fbdbff] rounded-lg flex items-center justify-center gap-5"
              style={{ background: `linear-gradient(to right, ${item.gradientColor.from}, ${item.gradientColor.to})` }}
            >
              <p className="text-6xl text-white">{item.icon}</p>
              <div className="text-white font-['Inter'] flex flex-col">
                <h2 className="text-[40px] font-extrabold">{item.value}</h2>
                <p className="text-2xl font-normal">{item.name}</p>
              </div>
            </div>
          )
        }
      </section>
      {/* profile section */}
      <section className="w-full h-[470px] flex flex-grow">
        {/* profile info */}
        <div className="w-1/2 h-full bg-orange-100 border-r-2 border-[#d1a054] flex flex-col gap-12 items-center justify-center">
          <img src={user?.photoURL || ""} className="size-[198px] rounded-full border-2 border-[#d1a054]" />
          <h3 className="text-[#151515] text-[32px] font-semibold font-['Cinzel']">{user?.displayName}</h3>
        </div>
        {/* profile stats */}
        <div className="w-1/2 h-full bg-yellow-100 flex flex-col justify-start items-start pl-14 pt-16 gap-2">
          <h1 className="text-[#151515] text-[40px] font-semibold font-['Cinzel'] mb-4">Your Activities</h1>
          <div className="flex items-center gap-2">
            <IoCart className="text-[#0088fe] text-2xl font-semibold font-['Cinzel']" />
            <h4 className="text-[#0088fe] text-2xl font-semibold font-['Cinzel']">Orders: 6</h4>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-[#00C4A1] text-2xl font-semibold font-['Cinzel']" />
            <h4 className="text-[#00C4A1] text-2xl font-semibold font-['Cinzel']">Reviews: 4</h4>
          </div>
          <div className="flex items-center gap-2">
            <IoCalendar className="text-[#FFBB28] text-2xl font-semibold font-['Cinzel']" />
            <h4 className="text-[#FFBB28] text-2xl font-semibold font-['Cinzel']">Bookings: 6</h4>
          </div>
          <div className="flex items-center gap-2">
            <IoWalletSharp className="text-[#FF8042] text-2xl font-semibold font-['Cinzel']" />
            <h4 className="text-[#FF8042] text-2xl font-semibold font-['Cinzel']">Payment: 6</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

<div className="w-[622px] h-[469px] bg-orange-100 border-r-2 border-[#d1a054]" />