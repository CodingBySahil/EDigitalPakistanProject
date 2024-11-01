import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const CourseTopNav = ({ className = "", changeURL }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={` text-xl  font-poppins ${className}  px-8 box-border  top-0 left-0 right-0 z-50 max-w-screen-2xl mx-auto`}
    >
      {/* Navbar for larger screens */}
      {!menuOpen && (
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-green-400">
            E-Digital Pakistan
          </h1>
          <div className="hidden lg:flex space-x-3 md:space-x-6 lg:space-x-8 text-gray">
            <Link to="/" className="no-underline relative ">
              Home
            </Link>
            <Link to="/course-calender" className="no-underline relative ">
              Courses
            </Link>
            <Link to="/instructors" className="no-underline relative ">
              Instructors
            </Link>
            <Link to="/blog" className="no-underline relative ">
              Blog
            </Link>
            <Link to="/about" className="no-underline relative ">
              About Us
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <span className="mr-2">Lina</span>
            <img
              src={`${changeURL}mask-group-1@2x.png`}
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
          {/* Hamburger menu for smaller screens */}
          <div className="lg:hidden relative">
            <button
              onClick={toggleMenu}
              className="bg-green-600  p-2 rounded-lg"
            >
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 right-0 lg:hidden mt-4 flex flex-col items-center bg-[#4abd86] p-4 rounded-md h-screen">
          <div className="lg:hidden relative ml-auto mr-4">
            <button
              onClick={toggleMenu}
              className="bg-emerald-800  p-2 rounded-lg"
            >
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>

          <Link to="/" className="py-2  text-lg no-underline">
            Home
          </Link>
          <Link to="/course-calender" className="py-2  text-lg no-underline">
            Courses
          </Link>
          <Link to="/instructors" className="py-2  text-lg no-underline">
            Instructors
          </Link>
          <Link to="/blog" className="py-2  text-lg no-underline">
            Blog
          </Link>
          <Link to="/about" className="py-2  text-lg no-underline">
            About Us
          </Link>
          <div className="flex items-center mt-4">
            <span className="mr-2 ">Lina</span>
            <img
              src={`${changeURL}mask-group-1@2x.png`}
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

CourseTopNav.propTypes = {
  className: PropTypes.string,
  changeURL: PropTypes.string.isRequired,
};

export default CourseTopNav;
