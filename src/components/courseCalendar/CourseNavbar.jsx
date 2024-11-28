import React from "react";
import { Link } from "react-router-dom";

const CourseNavbar = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  return (
    <>
      {/* Header Section */}
      <header className="flex items-center justify-between bg-white px-8 py-4 shadow">
        <h1 className="text-2xl font-semibold text-green-600">
          E-Digital Pakistan
        </h1>
        <nav className="space-x-6 text-gray-700">
          <Link to="/" className="no-underline hover:text-green-600">
            Home
          </Link>
          <Link
            to="/course-calender?chapterNumber=ENG101CH2"
            className="no-underline hover:text-green-600"
          >
            Courses
          </Link>
          <Link to="/instructors" className="no-underline hover:text-green-600">
            Instructors
          </Link>
          <Link to="/blog" className="no-underline hover:text-green-600">
            Blog
          </Link>
          <Link to="/about" className="no-underline hover:text-green-600">
            About Us
          </Link>
        </nav>
        <div className="flex items-center">
          <span className="mr-2"><b>{username.toUpperCase()}</b></span>
          <img
            src="group-88@2x.png"
            alt="User Profile"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </header>
    </>
  );
};

export default CourseNavbar;
