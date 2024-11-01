import React from "react";
import { Link } from "react-router-dom";

const CourseNavbar = () => {
  return (
    <>
      {/* Header Section */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-semibold text-green-600">
          E-Digital Pakistan
        </h1>
        <nav className="space-x-6 text-gray-700">
          <Link to="/" className="hover:text-green-600 no-underline">
            Home
          </Link>
          <Link to="/courses" className="hover:text-green-600 no-underline">
            Courses
          </Link>
          <Link to="/instructors" className="hover:text-green-600 no-underline">
            Instructors
          </Link>
          <Link to="/blog" className="hover:text-green-600 no-underline">
            Blog
          </Link>
          <Link to="/about" className="hover:text-green-600 no-underline">
            About Us
          </Link>
        </nav>
        <div className="flex items-center">
          <span className="mr-2">Lina</span>
          <img
            src="group-88@2x.png"
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>
    </>
  );
};

export default CourseNavbar;
