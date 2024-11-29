import PropTypes from "prop-types";
import { json, Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const TopNav = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Authentication state
  // const [isAuthenticated, setIsAuthenticated] = useState(() => {
  //   const storedAuth = localStorage.getItem("isAuthenticated");
  //   return storedAuth === "true";
  // });

  let username = localStorage.getItem("user");
  username = JSON.parse(username);

  return (
    <div
      className={`bg-darkgray font-poppins text-xl text-white ${className} absolute left-0 right-0 top-0 z-50 mx-auto box-border max-w-screen-2xl px-8 py-3`}
    >
      {/* Navbar for larger screens */}
      {!menuOpen && (
        <div className="flex items-center justify-between">
          <img
            className="h-[4.125rem] w-56 sm:w-[16.125rem] md:w-[16.125rem] lg:w-[16.125rem] xl:w-[18.125rem]"
            alt="EDP Logo"
            src="/edp-logo@2x.png"
          />
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
            <Link
              to={"/class?username=Lina"}
              className="relative text-white no-underline"
            >
              Classes
            </Link>
            <Link to={"/blog"} className="relative text-white no-underline">
              Blog
            </Link>
            <Link to={"/about-us"} className="relative text-white no-underline">
              About&nbsp;Us
            </Link>
          </div>
          {!username ? (
            <div className="hidden space-x-4 lg:flex">
              <Link
                to={"/login"}
                className="rounded-2xl bg-white px-4 py-2 font-medium tracking-[0.02em] text-dimgray no-underline shadow-lg"
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
            // <h1 className="">{username.username}</h1>
            // profile with username and icons
            <div className="hidden space-x-4 lg:flex">
              <Link
                to={"/profile"}
                className="rounded-2xl px-4 py-2 font-medium tracking-[0.02em] text-white no-underline shadow-lg"
              >
                {username?.username}
              </Link>
            </div>
          )}

          {/* Hamburger menu for smaller screens */}
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

      {/* Mobile menu */}
      {menuOpen && (
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
          <Link
            to={"/class?username=Lina"}
            className="text-lg py-2 text-white no-underline"
          >
            classes
          </Link>
          <Link to={"/blog"} className="text-lg py-2 text-white no-underline">
            Blog
          </Link>
          <Link
            to={"/about-us"}
            className="text-lg py-2 text-white no-underline"
          >
            About Us
          </Link>
          <Link
            to={"/login"}
            className="text-lg mt-4 w-full rounded-md bg-white py-2 text-center text-dimgray no-underline"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="text-lg mt-2 w-full rounded-md bg-gray-300 py-2 text-center text-white no-underline"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

TopNav.propTypes = {
  className: PropTypes.string,
};

export default TopNav;
