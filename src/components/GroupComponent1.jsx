import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 text-left text-[1.375rem] font-poppins ${className}`}
    >
      {/* Left Section - Image */}
      <div className="relative">
        <img
          className="w-full  rounded-[21px] object-cover"
          alt="Biology Book"
          src="/3@2x.png"
        />
        <div className="absolute top-0 -z-10 left-0 w-[8rem] h-[8rem] bg-mediumspringgreen-100 rounded-full" />
        <div className="absolute top-4 left-40 transform -translate-x-1/2 w-[1.8rem] h-[1.8rem] bg-darkturquoise-100 rounded-full" />
        <div className="absolute bottom-56 right-8 w-44 h-44 bg-indigo-700/60 rounded-full" />
      </div>

      {/* Right Section - Text */}
      <div className="space-y-6">
        <h1 className="text-[2.5rem] leading-[160%] font-semibold text-darkslateblue-200">
          A <span className="text-turquoise">user interface</span> designed for the interactive classroom
        </h1>

        <div className="flex items-center space-x-4">
          <div className="w-[1.6rem] h-[1.6rem] bg-darkslateblue-200 rounded-sm"></div>
          <p className="leading-[180%]">
            <b>Modular Course Design:</b> Students have full control over the selection of subjects/topics.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-[1.6rem] h-[1.6rem] bg-darkorange rounded-sm"></div>
          <p className="leading-[180%]">
            <b>Interactive Lessons:</b> Use interactive videos, quizzes, and simulations that allow students to engage with the material actively.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <img className="w-[1.8rem] h-[1.6rem]" alt="Users Icon" src="/users-2.svg" />
          <p className="leading-[180%]">
            <b>Aligned with Curriculum:</b> Ensure that the self-paced, sequential study aligns with standard curriculum requirements and prepares students for formal exams.
          </p>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
