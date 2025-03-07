import { HiMiniHome } from "react-icons/hi2";
import TextLogo from "../../../Components/shared/TextLogo";
import { IoCalendar } from "react-icons/io5";
import { FaBook, FaCreditCard, FaUsers } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePermContactCalendar, MdReviews, MdShoppingBag } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosMail, IoMdMenu } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { RiMenuFold2Fill } from "react-icons/ri";
import useAdmin from "../../../hooks/useAdmin";
import { TbLogout } from "react-icons/tb";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const userNavLinks = [
  {
    title: "User Home",
    icon: <HiMiniHome />,
    link: '/dashboard',
    end: true
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

const adminNavLinks = [
  {
    title: "Admin Home",
    icon: <HiMiniHome />,
    link: '/dashboard/admin',
    end: true
  },
  {
    title: "Add Items",
    icon: <GiForkKnifeSpoon />,
    link: '/dashboard/admin/add-items'
  },
  {
    title: "Manage Items",
    icon: <RiMenuFold2Fill />,
    link: '/dashboard/admin/manage-items'
  },
  {
    title: "Manage Bookings",
    icon: <FaBook />,
    link: '/dashboard/admin/manage-bookings'
  },
  {
    title: "All Users",
    icon: <FaUsers />,
    link: '/dashboard/admin/all-users'
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
  const [isAdmin] = useAdmin();
  const { logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const [showedNavLinks, setShowedNavLinks] = useState([])

  useEffect(() => {
    if (isAdmin) {
      setShowedNavLinks(adminNavLinks)
    } else {
      setShowedNavLinks(userNavLinks)
    }
    console.log("isAdmin: " + isAdmin);
  }, [isAdmin]);

  const handleLogout = async () => {
    try {
      const result = await logOut()
      if (result) {
        navigate('/')
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You've successfully Logged Out.",
          showConfirmButton: false,
          footer: "See you later.",
          timer: 2000
        });
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: 'Please try again later.',
          timer: 2000,
          draggable: true
        });
      }
    } catch (err) {
      console.log("something wrong has happened.")
    }
  }

  return (
    <div className="w-72 min-h-full px-2 md:px-5 py-12 flex flex-col bg-[#d1a054]">
      {/* logo */}
      <div className="mb-[60px]">
        <TextLogo textBlack shortLogo />
      </div>
      {/* user dashboard navlinks */}
      <nav className="flex flex-col gap-6 p-2.5">
        {
          showedNavLinks.map((navlink, index) =>
            <NavLink
              key={index}
              to={navlink.link}
              end={navlink.end}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? " text-red-500 " : "  ",
                  isActive ? " text-white " : " text-[#151515] hover:text-white ",
                  isTransitioning ? " text-blue-500 " : "  ",
                ].join("flex items-center gap-2 text-base font-bold font-['Cinzel'] hover:ml-5 transition-all duration-200 ease-in-out")
              }
            >
              <p className="text-2xl">{navlink.icon}</p>
              <h3 className="text-lg font-bold font-['Cinzel']">{navlink.title}</h3>
            </NavLink>
          )
        }
        <button
          onClick={handleLogout}
          className=" text-[#151515] hover:text-white  flex items-center gap-2 text-base font-bold font-['Cinzel'] hover:ml-5 transition-all duration-200 ease-in-out">
          <p className="text-2xl"><TbLogout /></p>
          <h3 className="text-lg font-bold font-['Cinzel']">Log Out</h3>
        </button>
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
    </div >
  );
};

export default SideNavBar;