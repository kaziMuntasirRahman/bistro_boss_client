import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      title: 'Home',
      link: '/',
      icon: 'home-icon', // optional, just an example of additional info
      isVisible: true,   // another example for future flexibility
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
            {/* {navLinks} */}
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
      <div className="navbar-end hidden lg:flex">
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
          <div>
            <img className="h-[43px] mr-5" src="assets/icons/shopping-cart-favicon.png" />
          </div>
        </ul>
        <button className="btn btn-md btn-outline btn-secondary">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;