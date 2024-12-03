import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

const TopNav = ({ className = "", onLogout, isAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    // navigate("/login");
  };

  // Get username from localStorage
  let userData = localStorage.getItem("user");
  // console.log(userData);
  userData = userData ? JSON.parse(userData) : null;
  // console.log(userData.user.username);

  // console.log(userData.user.username);

  // const username = "admin"

  return (
    <div
      className={`font-poppins text-xl text-white ${className} absolute left-0 right-0 top-0 z-50 mx-auto box-border max-w-screen-2xl px-8 py-3`}
    >
      {/* Main Navbar */}
      {!menuOpen && (
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <img
              className="h-[4.125rem] w-56 sm:w-[16.125rem] md:w-[16.125rem] lg:w-[16.125rem] xl:w-[18.125rem]"
              alt="EDP Logo"
              src="/edpLogos/edp-logo@2x.png"
            />
          </Link>
          <div className="hidden space-x-3 md:space-x-6 lg:flex lg:space-x-8">
            <Link to={"/"} className="relative text-white no-underline">
              Home
            </Link>
            <Link
              to={"/classSelection"}
              className="relative text-white no-underline"
            >
              Courses
            </Link>
            {/* <Link
              to={"/class?username=Lina"}
              className="relative text-white no-underline"
            >
              Classes
            </Link>
            <Link to={"/blog"} className="relative text-white no-underline">
              Blog
            </Link> */}
            <Link to={"/aboutus"} className="relative text-white no-underline">
              About&nbsp;Us
            </Link>
          </div>
          {/* profile div */}
          <div className="hidden lg:block">
            {!isAuthenticated ? (
              <div className="hidden space-x-4 lg:flex">
                <Link
                  to={"/login"}
                  className="rounded-2xl px-4 py-2 font-medium tracking-[0.02em] text-dimgray no-underline shadow-lg"
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="rounded-2xl bg-gray-300 px-4 py-2 font-medium tracking-[0.02em] text-white no-underline shadow-lg md:text-xl lg:text-3xl"
                >
                  Sign&nbsp;Up
                </Link>
              </div>
            ) : (
              <div className="relative ml-3">
                {/* User Profile Dropdown */}
                <button
                  className="text-sm relative flex rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={toggleDropdown}
                  aria-expanded={dropdownOpen}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  {/* <img
                    alt="User avatar"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  /> */}
                  {/* user icon from react icon */}
                  <FaUser size={28} className="text-white" />
                </button>

                {dropdownOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                    role="menu"
                  >
                    <Link
                      to={`/profile?username=${userData.user.username}`}
                      className="text-sm block px-4 py-2 text-gray-700 no-underline hover:bg-white/30"
                      role="menuitem"
                    >
                      {userData.user.username}
                    </Link>
                    {userData.user.username === "admin" && (
                      <Link
                        to={`/subjectSelection?username=${userData.user.username}`}
                        className="text-sm block px-4 py-2 text-gray-700 no-underline hover:bg-white/30"
                        role="menuitem"
                      >
                        Admin Panel
                      </Link>
                    )}
                    <a
                      onClick={() => handleLogoutClick()}
                      href="/"
                      className="text-sm block px-4 py-2 text-gray-700 no-underline hover:bg-white/30"
                      role="menuitem"
                    >
                      Log out
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Hamburger Menu */}
          <div className="relative lg:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-lg bg-emerald-800 p-2 text-white"
            >
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className="bg-light-green absolute left-0 right-0 top-0 mt-4 flex h-screen flex-col items-center rounded-md bg-[#4abd86] p-4 no-underline lg:hidden">
            <div className="relative ml-auto mr-4 lg:hidden">
              <button
                onClick={toggleMenu}
                className="rounded-lg bg-emerald-800 p-2 text-white"
              >
                {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
              </button>
            </div>
            
            
            <Link to={"/"} className="text-lg py-2 text-white no-underline">
              Home
            </Link>
            <Link
              to={"/classSelection"}
              className="text-lg py-2 text-white no-underline"
            >
              Courses
            </Link>
            {/* <Link
              to={"/class?username=Lina"}
              className="text-lg py-2 text-white no-underline"
            >
              Classes
            </Link>
            <Link to={"/blog"} className="text-lg py-2 text-white no-underline">
              Blog
            </Link> */}
            <Link
              to={"/aboutus"}
              className="text-lg py-2 text-white no-underline"
            >
              About Us
            </Link>
            {/* profile div */}
            <div className="">
              {!isAuthenticated ? (
                <div className=" mt-4 ">
                  <Link
                    to={"/login"}
                    className="rounded-2xl px-4 py-2 font-medium tracking-[0.02em] text-white no-underline shadow-lg"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/register"}
                    className="rounded-2xl bg-gray-300 px-4 py-2 font-medium tracking-[0.02em] text-white no-underline shadow-lg md:text-xl lg:text-3xl"
                  >
                    Sign&nbsp;Up
                  </Link>
                </div>
              ) : (
                <div className=" ml-3 absolute right-10 top-20">
                  {/* User Profile Dropdown */}
                  <button
                    className="text-sm relative flex rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={toggleDropdown}
                    aria-expanded={dropdownOpen}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    {/* <img
                      alt="User avatar"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    /> */}
                    <FaUser size={28} className="text-white" />
                  </button>

                  {dropdownOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                      role="menu"
                    >
                      <Link
                        to={`/profile?username=${userData.user.username}`}
                        className="text-sm block px-4 py-2 text-gray-700 no-underline hover:bg-white/30"
                        role="menuitem"
                      >
                        {userData.user.username}
                      </Link>
                      {userData.user.username === "admin" && (
                        <Link
                          to={`/subjectSelection?username=${userData.user.username}`}
                          className="text-sm block px-4 py-2 text-gray-700 no-underline hover:bg-white/30"
                          role="menuitem"
                        >
                          Admin Panel
                        </Link>
                      )}
                      <a
                        onClick={() => handleLogoutClick()}
                        href="/"
                        className="text-sm block px-4 py-2 text-gray-700 no-underline hover:bg-white/30"
                        role="menuitem"
                      >
                        Log out
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

TopNav.propTypes = {
  className: PropTypes.string,
  onLogout: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

export default TopNav;
