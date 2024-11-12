import React, { useState } from "react";

const ExploreCourses = ({ levelOfClass }) => {
  const [clickedSubject, setClickedSubject] = useState(null);

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
      <div className="py-8 bg-[#ebf5ff] overflow-hidden">
        {/* Class Title */}
        <div className="bg-red text-white px-6 py-2 rounded-md shadow-md w-fit text-lg mb-6">
          Class {levelOfClass}th
        </div>

        {/* Container */}
        <div className="flex justify-between">
          {/* Subject Cards Container */}
          <div className="grid grid-cols-4 md:grid-cols-9 lg:grid-cols-12 gap-4 relative">
            {[
              "English",
              "General Science",
              "Islamiat",
              "Mathematics",
              "Urdu",
              "Geography",
              "History",
            ].map((subject, index) => (
              <div
                key={index}
                className="flex justify-center items-center"
                onMouseEnter={() => setClickedSubject(subject)} // Show subject details on hover
                // onMouseLeave={() => setClickedSubject(null)}    // Hide details when mouse leaves
              >
                <div
                  className={`bg-white p-2 rounded-lg shadow-lg max-w-20 h-[20rem] transform -rotate-[8deg] transition-all duration-300 ease-in-out ${
                    clickedSubject === subject ? "scale-110 z-10" : ""
                  }`}
                >
                  <div className="bg-green-200 rounded-lg shadow-md p-2 h-full">
                    <div
                      className={`text-white py-2 px-4 rounded-md text-center h-full flex justify-center items-start flex-shrink-0 ${getBackgroundColor(
                        subject
                      )}`}
                    >
                      <p className="transform rotate-[90deg] text-xl w-auto whitespace-nowrap my-auto">
                        {subject} - Class {levelOfClass}th
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clicked Subject Book Design */}
          {clickedSubject && (
            <div className="transition-all duration-300 ease-in-out transform hover:scale-103 hover:shadow-2xl p-2 md:p-4 max-h-full absolute right-0">
              <div className="bg-white h-72 p-4 rounded-lg shadow-lg flex opacity-0 animate-fadeIn">
                <img
                  src="/book-1@2x.png" // respective image path
                  alt={`${clickedSubject} book`}
                  className="w-full h-full object-contain"
                />
                <div>
                  <div className="mt-2 text-base md:text-lg font-bold">
                    {clickedSubject} - Class {levelOfClass}th
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Course textbooks, include all subjects taught in Govt.
                    schools.
                  </div>
                  <div className="text-base md:text-lg font-bold mt-4">
                    Rs. 1500
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ))}
                  </div>
                  <button className="mt-2 bg-blue-500 text-xs md:text-sm lg:text-base text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                    Explore
                  </button>
                </div>
                {/* Close Button */}
                <button
                  onClick={() => setClickedSubject(null)}
                  className="absolute top-2 right-2 text-white bg-rose-500 cursor-pointer p-1 rounded-full hover:bg-red-600 transition-all"
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExploreCourses;
