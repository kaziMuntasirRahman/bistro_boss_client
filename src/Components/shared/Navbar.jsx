import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { CiShoppingCart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import useCart from '../../hooks/useCart'

const navLinks = [
  {
    title: 'Home',
    link: '/',
    icon: 'home-icon',
    isVisible: true,
  },
  {
    title: 'Contact Us',
    link: '/contact',
    icon: 'contact-icon',
    isVisible: true,
  },
  {
    title: 'Dashboard',
    link: '/dashboard',
    icon: 'dashboard-icon',
    isVisible: true,
  },
  {
    title: 'Our Menu',
    link: '/menu',
    icon: 'menu-icon',
    isVisible: true,
  },
  {
    title: 'Our Shop',
    link: '/shop',
    icon: 'shop-icon',
    isVisible: true,
  },
];

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [cart] = useCart();
  console.log(cart)

  const handleLogout = async () => {
    try {
      const result = await logOut()
      if (result) {
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
    <nav className="navbar h-[130px] bg-[#151515]/50 py-7 px-14 fixed top-0 left-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks.map((navLink, index) =>
              <NavLink
                key={index}
                to={navLink.link}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "activeNavLink"
                    : isPending
                      ? "pendingNavLink"
                      : "inActiveNavLink"
                }
              >{navLink.title}</NavLink>
            )}
          </ul>
        </div>
        <Link to="/" className="flex flex-col gap-0">
          <div className="text-white text-[32px] font-black font-Cinzel">BISTRO BOSS</div>
          <div className="text-white text-2xl font-bold font-Cinzel tracking-[9.12px]">Restaurant</div>
        </Link>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div> */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5 flex items-center">
          {navLinks.map((navLink, index) =>
            <NavLink
              key={index}
              to={navLink.link}
              className={({ isActive, isPending }) =>
                isActive
                  ? "activeNavLink"
                  : isPending
                    ? "pendingNavLink"
                    : "inActiveNavLink"
              }
            >{navLink.title}</NavLink>
          )}
          <div className="relative">
            {/* <img className="h-[43px] mr-5" src="/assets/icons/shopping-cart-favicon.png" /> */}
            {/* <CiShoppingCart className="text-5xl text-green-500 mr-5 font-bold" /> */}
            <FaCartShopping className="text-5xl text-green-500 mr-5 font-bold " />
            <p className=" bg-red-600 text-lg w-min  text-white  px-2 rounded-full absolute -top-2 left-4">{cart.length}</p>
          </div>
        </ul>
        {
          user ?
            <button onClick={handleLogout} className={`h-16 px-[30px] py-4 rounded-lg border-b-2 border-[#ebf0f7] justify-start items-start gap-2.5 inline-flex uppercase text-[#ebf0f7] text-xl font-medium font-['Inter'] mt-6 mb-8 hover:bg-[#1F2937] hover:text-white hover:border-slate-400 transition-all ease-in-out duration-300 ${loading && "loading loading-dots loading-sm"}`}>Logout</button>
            :
            <Link to="/login" className={`h-16 px-[30px] py-4 rounded-lg border-b-2 border-[#ebf0f7] justify-start items-start gap-2.5 inline-flex uppercase text-[#ebf0f7] text-xl font-medium font-['Inter'] mt-6 mb-8 hover:bg-[#1F2937] hover:text-white hover:border-slate-400 transition-all ease-in-out duration-300 ${loading && "loading loading-dots loading-sm"}`}>Login</Link>
        }
      </div>
    </nav>
  );
};

export default Navbar;