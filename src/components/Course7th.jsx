import React from "react";

const Course7th = () => {
  const getBackgroundColor = (subject) => {
    switch (subject) {
      case "English":
        return "bg-orange-500";
      case "General Science":
        return "bg-yellow-700";
      case "Islamiat":
        return "bg-blue-600";
      case "Mathematics":
        return "bg-red"; // Update this if the color name is different
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
      <div className="py-8 bg-[#ebf5ff] ">
        {/* Class Title */}
        <div className="bg-red text-white px-6 py-2 rounded-md shadow-md w-fit text-lg mb-6">
          Class 7th
        </div>

        {/* Subject Cards Container */}
        <div className="grid grid-cols-4 md:grid-cols-9 lg:grid-cols-12 gap-4">
          {/* Subject Cards */}
          {[
            "English",
            "General Science",
            "Islamiat",
            "Mathematics",
            "Urdu",
            "Geography",
            "History",
          ].map((subject, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="bg-white p-2 rounded-lg shadow-lg max-w-20 h-[20rem] transform -rotate-[8deg]">
                {" "}
                {/* Fixed width and height */}
                <div className="bg-green-200 rounded-lg shadow-md p-2 h-full ">
                  <div
                    className={`text-white py-2 px-4 rounded-md text-center h-full flex justify-center items-start flex-shrink-0 ${getBackgroundColor(
                      subject
                    )}`}
                  >
                    <p className="transform rotate-[90deg] text-xl  w-auto whitespace-nowrap my-auto">
                      {`${subject} - Class 7th`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course7th;
