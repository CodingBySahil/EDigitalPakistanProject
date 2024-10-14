import React, { useState } from "react";

const Course6th = () => {
  const [hoveredSubject, setHoveredSubject] = useState(null);

  const getBackgroundColor = (subject) => {
    switch (subject) {
      case "English":
        return "bg-orange-500";
      case "General Science":
        return "bg-yellow-700";
      case "Islamiat":
        return "bg-blue-600";
      case "Mathematics":
        return "bg-red-500"; // Make sure the color class exists
      case "Urdu":
        return "bg-pink-500";
      case "Geography":
        return "bg-blue-500";
      case "History":
        return "bg-pink-600";
      default:
        return "bg-gray-500"; // Default color
    }
  };

  return (
    <>
      <div className="py-8 bg-[#ebf5ff] overflow-hidden">
        {/* Class Title */}
        <div className="bg-red text-white px-6 py-2 rounded-md shadow-md w-fit text-lg mb-6">
          Class 6th
        </div>

        {/* Container */}
        <div className="flex justify-between">
          {/* Subject Cards Container */}
          <div className="grid grid-cols-4 md:grid-cols-9 lg:grid-cols-12 gap-4">
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
                onMouseEnter={() => setHoveredSubject(subject)}
                onMouseLeave={() => setHoveredSubject(null)}
              >
                <div className="bg-white p-2 rounded-lg shadow-lg max-w-20 h-[20rem] transform -rotate-[8deg]">
                  <div className="bg-green-200 rounded-lg shadow-md p-2 h-full">
                    <div
                      className={`text-white py-2 px-4 rounded-md text-center h-full flex justify-center items-start flex-shrink-0 ${getBackgroundColor(
                        subject
                      )}`}
                    >
                      <p className="transform rotate-[90deg] text-xl w-auto whitespace-nowrap my-auto">
                        {`${subject} - Class 6th`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hovered Subject Book Design */}
          {hoveredSubject ? (
            <div className="w-full md:w-1/3 lg:w-1/4 p-2 md:p-4 max-h-full">
              <div className="bg-white p-4 rounded-lg shadow-lg block">
                <img
                  src="/path/to/book-image.png" // respective image path
                  alt={`${hoveredSubject} book`}
                  className="w-full h-auto max-h-40 object-cover"
                />
                <div className="mt-2 text-base md:text-lg font-bold">
                  {hoveredSubject} - Class 8th
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  Course textbooks, include all subjects taught in Govt.
                  schools.
                </div>
                <div className="text-base md:text-lg font-bold mt-4">
                  Rs. 1500
                </div>
                <button className="mt-2 bg-blue-500 text-xs md:text-sm lg:text-base text-white py-2 px-4 rounded-md">
                  Explore
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Course6th;
