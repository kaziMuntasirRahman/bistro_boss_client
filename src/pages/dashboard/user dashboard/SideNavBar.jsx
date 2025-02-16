import { HiMiniHome } from "react-icons/hi2";
import TextLogo from "../../../Components/shared/TextLogo";
import { IoCalendar } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePermContactCalendar, MdReviews, MdShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosMail, IoMdMenu } from "react-icons/io";

const navLinks = [
  {
    title: "User Home",
    icon: <HiMiniHome />,
    link: '/dashboard'
  },
  {
    title: "Reservation",
    icon: <IoCalendar />,
    link: '/dashboard/reservation'
  },
  {
    title: "Payment History",
    icon: <FaCreditCard />,
    link: '/dashboard/payment-history'
  },
  {
    title: "My Cart",
    icon: <FaCartShopping />,
    link: '/dashboard/my-cart'
  },
  {
    title: "Add Review",
    icon: <MdReviews />,
    link: '/dashboard/add-review'
  },
  {
    title: "My Booking",
    icon: <MdOutlinePermContactCalendar />,
    link: '/dashboard/bookings'
  }
];

const landingPageNavLinks = [
  {
    title: "Home",
    icon: <HiMiniHome />,
    link: '/'
  },
  {
    title: "Menu",
    icon: <IoMdMenu />,
    link: '/menu'
  },
  {
    title: "Shop",
    icon: <MdShoppingBag />,
    link: '/shop'
  },
  {
    title: "Contact",
    icon: <IoIosMail />,
    link: '/contact'
  }
]

const SideNavBar = () => {
  return (
    <div className="w-72 min-h-full px-2 md:px-5 py-12 flex flex-col bg-[#d1a054]">
      {/* logo */}
      <div className="mb-[60px]">
        <TextLogo textBlack shortLogo />
      </div>
      {/* dashboard navlinks */}
      <nav className="flex flex-col gap-6 p-2.5">
        {
          navLinks.map((navlink, index) =>
            <NavLink
              key={index}
              to={navlink.link}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "" : "",
                  isActive ? " text-white " : " text-[#151515] hover:text-white ",
                  isTransitioning ? "" : "",
                ].join("flex items-center gap-2 text-base font-bold font-['Cinzel'] hover:ml-4 hover:scale-110 transition-all duration-200 ease-in-out")
              }
            >
              <p className="text-2xl">{navlink.icon}</p>
              <h3 className="text-lg font-bold font-['Cinzel']">{navlink.title}</h3>
            </NavLink>
          )
        }
        {/* divider */}
        <div className="h-[2px] w-full rounded-sm bg-white pr-5 my-6" />
        {/* landing page navlinks */}
        {
          landingPageNavLinks.map((navlink, index) =>
            <NavLink
              key={index}
              to={navlink.link}
              className="flex items-center gap-2 text-base font-bold font-['Cinzel'] hover:ml-4 hover:scale-110 transition-all duration-200 ease-in-out hover:text-white">
              <p className="text-2xl">{navlink.icon}</p>
              <h3 className="text-lg font-bold font-['Cinzel']">{navlink.title}</h3>
            </NavLink>
          )
        }
      </nav>
      {/* landing page navlinks */}
    </div >
  );
};

export default SideNavBar;


//     className={({ isActive, isPending }) =>
//   isActive
//     ? "activeNavLink"
//     : isPending
//       ? "pendingNavLink"
//       : "inActiveNavLink"
// }