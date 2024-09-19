import PropTypes from "prop-types";

const SelfAssessments = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full flex flex-col items-center sm:flex-row mx-auto mt-16 text-center sm:text-left text-lg text-darkslateblue-100 font-poppins ${className}`}
    >
      {/* Left text section */}
      <div className="relative w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start px-4">
        <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          <span>Self-assessments, </span>
          <span className="text-turquoise">Quizzes</span>
          <span>, Tests, </span>
          <span className="text-lightseagreen">Exams</span>
        </div>
        <p className="text-base sm:text-lg lg:text-xl xl:text-3xl font-semibold mt-4">
          Encourage students to regularly self-assess their understanding of
          the material, reflecting on their learning process and adjusting their
          study plans as needed.
        </p>
      </div>

      {/* Right section */}
      <div className="relative bg-white mt-16 sm:mt-0 sm:w-1/2 rounded-26xl">
        {/* Decorative Elements */}
        <div className="absolute -bottom-12 -left-12 rounded-full bg-mediumspringgreen-200 w-6 h-6"></div>
        <div className="absolute rounded-full bg-hotpink -right-8 top-2/4 w-6 h-6"></div>
        <div className="absolute -top-8 -left-14 -z-10 rounded-full bg-royalblue w-32 h-32"></div>
        <div className="absolute -top-12 left-20 rounded-full bg-sandybrown w-6 h-6"></div>

        {/* Main Content Section */}
        <div className="flex flex-col items-start justify-between shadow-lg rounded-lg p-6 relative">
          <h4 className="text-steelblue rounded-full text-xl font-medium bg-lightsteelblue-100 px-4 py-2">
            Question 1
          </h4>
          <p className="text-lg mb-4">
            True or false? Are plants living things?
          </p>
          {/* Main image */}
          <img
            className="w-full h-auto object-cover"
            alt="question"
            src="/mask-group-1@2x.png"
          />
          {/* Decorative Images */}
          <img
            className="w-32 sm:w-40 object-contain absolute z-50 -top-12 right-0"
            alt="decorative"
            src="/group-90@2x.png"
          />
          <img
            className="w-32 sm:w-40 object-contain absolute z-50 top-4 -right-12"
            alt="decorative"
            src="/group-88@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

SelfAssessments.propTypes = {
  className: PropTypes.string,
};

export default SelfAssessments;
