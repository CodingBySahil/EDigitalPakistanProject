import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const TopNav = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`bg-darkgray text-xl text-white font-poppins ${className} py-3 px-8 box-border absolute top-0 left-0 right-0 z-50 max-w-screen-2xl mx-auto`}
    >
      {/* Navbar for larger screens */}
      {!menuOpen && (
        <div className="flex justify-between items-center">
          <img
            className="w-56 sm:w-[16.125rem]   md:w-[16.125rem]  lg:w-[16.125rem] xl:w-[18.125rem] h-[4.125rem] "
            alt="EDP Logo"
            src="/edp-logo@2x.png"
          />
          <div className="hidden lg:flex space-x-3 md:space-x-6 lg:space-x-8 ">
            <Link to={"/"} className=" no-underline relative  text-white">
              Home
            </Link>
            {/* <Link to={'/courses'} className=" no-underline relative  text-white">Courses</Link> */}
            {/* <Link to={'/instructors'} className=" no-underline relative  text-white">Instructors</Link> */}
            {/* <Link to={'/blog'} className=" no-underline relative  text-white">Blog</Link> */}
            {/* <Link to={'/about-us'} className=" no-underline relative  text-white">About&nbsp;Us</Link> */}
          </div>
          <div className="hidden lg:flex space-x-4">
            <Link
              to={"/login"}
              className="shadow-lg rounded-2xl bg-white text-dimgray py-2 px-4 tracking-[0.02em] font-medium no-underline"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="shadow-lg rounded-2xl bg-gray-300 py-2 px-4 tracking-[0.02em] font-medium text-white no-underline md:text-xl lg:text-3xl"
            >
              Sign&nbsp;Up
            </Link>
          </div>
          {/* Hamburger menu for smaller screens */}
          <div className="lg:hidden relative">
            <button
              onClick={toggleMenu}
              className="bg-emerald-800 text-white p-2 rounded-lg "
            >
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 right-0 lg:hidden mt-4 flex flex-col items-center bg-light-green p-4 rounded-md no-underline bg-[#4abd86] h-screen">
          <div className="lg:hidden relative ml-auto mr-4 ">
            <button
              onClick={toggleMenu}
              className="bg-emerald-800 text-white p-2 rounded-lg "
            >
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>

          <Link to={"/"} className="py-2 text-white text-lg no-underline">
            Home
          </Link>
          {/* <Link to={'/courses'} className="py-2 text-white text-lg no-underline">Courses</Link> */}
          {/* <Link to={'/instructors'} className="py-2 text-white text-lg no-underline">Instructors</Link> */}
          {/* <Link to={'/blog'} className="py-2 text-white text-lg no-underline">Blog</Link> */}
          {/* <Link to={'/about-us'} className="py-2 text-white text-lg no-underline">About Us</Link> */}
          <Link
            to={"/login"}
            className="mt-4 py-2 bg-white text-dimgray rounded-md w-full text-center text-lg no-underline"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="mt-2 py-2 bg-gray-300 text-white rounded-md w-full text-center text-lg no-underline"
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
