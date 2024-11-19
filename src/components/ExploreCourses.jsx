import PropTypes from "prop-types";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ExploreCourses = ({ levelOfClass }) => {
  const getBackgroundColor = (subject) => {
    switch (subject) {
      case "English":
        return "bg-orange-500";
      case "General Science":
        return "bg-yellow-700";
      case "Islamiat":
        return "bg-blue-600";
      case "Mathematics":
        return "bg-rose-500";
      case "Urdu":
        return "bg-pink-500";
      case "Geography":
        return "bg-blue-500";
      case "History":
        return "bg-pink-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      <div className="overflow-y-hidden bg-[#ebf5ff] py-8">
        {/* Class Title */}
        <div className="text-lg mb-6 w-fit rounded-md bg-red-600 px-6 py-2 text-white shadow-md">
          Class {levelOfClass}th
        </div>

        {/* Container */}
        <div className="relative">
          {/* Subject Cards Container */}
          <div className="relative flex flex-wrap gap-4">
            {[
              "English",
              "General Science",
              "Islamiat",
              "Mathematics",
              "Urdu",
              "Geography",
              "History",
            ].map((subject, index) => {
              const [isHovered, setIsHovered] = useState(false);

              return (
                <div key={index} className="flex">
                  <div
                    className="flex items-center justify-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div
                      className={`flex h-[20rem] -rotate-[2deg] transform rounded-lg bg-white p-2 shadow-lg transition-all duration-1000 ease-in-out ${
                        isHovered ? "z-10 -rotate-[1deg]" : ""
                      }`}
                    >
                      <div className="h-full max-w-20 rounded-lg bg-green-200 p-2 shadow-md">
                        <div
                          className={`flex h-full flex-shrink-0 items-start justify-center rounded-md px-4 py-2 text-center text-white transition-transform duration-500 ${getBackgroundColor(
                            subject,
                          )}`}
                        >
                          <p className="my-auto w-auto rotate-[90deg] transform whitespace-nowrap text-xl">
                            {subject} - Class {levelOfClass}th
                          </p>
                        </div>
                      </div>
                      <div>
                        {/* Hovered Subject Book Design */}
                        {isHovered && (
                          <div className="animate-fadeIn w-96 transform p-2 transition-all duration-500 ease-in-out hover:scale-105 md:p-4">
                            <div className="flex h-72 rounded-lg bg-white p-4 shadow-lg">
                              <img
                                src="/book-1@2x.png" // respective image path
                                alt={`${subject} book`}
                                className="h-full w-full object-contain"
                              />
                              <div>
                                <div className="md:text-lg mt-2 text-base font-bold">
                                  {subject} - Class {levelOfClass}th
                                </div>
                                <div className="md:text-sm text-xs text-gray-600">
                                  Course textbooks, include all subjects taught
                                  in Govt. schools.
                                </div>
                                <div className="md:text-lg mt-4 text-base font-bold">
                                  Rs. 1500
                                </div>
                                <div className="flex items-center gap-0.5">
                                  {[...Array(5)].map((_, i) => (
                                    <FaStar
                                      key={i}
                                      className="h-5 w-5 text-yellow-300 hover:text-yellow-500"
                                    />
                                  ))}
                                </div>
                                <Link to={"/course-calender"}>
                                  <button className="md:text-sm mt-2 cursor-pointer rounded-md bg-blue-400 px-4 py-2 text-xs text-white transition-colors hover:bg-blue-600 lg:text-base">
                                    Explore
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

// adding props validation
ExploreCourses.propTypes = {
  levelOfClass: PropTypes.string.isRequired,
};
export default ExploreCourses;
