import PropTypes from "prop-types";
import React from "react";

const AlpCurriculum = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full flex flex-col-reverse md:flex-row items-center mx-auto mt-16 ${className} `}
    >
      {/* Left Section: Images */}
      <div className="relative w-full h-full flex justify-center items-center px-4 basis-1/2">
        <img
          className="absolute z-10 top-0 left-0 w-full h-full object-cover"
          alt="decorative graphic"
          src="/group-106.svg"
        />
        <img
          className="relative z-20 w-[100%] h-[100%] object-cover"
          alt="curriculum illustration"
          src="/image-16@2x.png"
        />
      </div>

      {/* Right Section: Text */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4 text-[1.5rem] font-poppins">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-darkslateblue-200 mb-0">
          ALP Curriculum
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-turquoise mb-0">
          Home Study
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed tracking-wide text-gray-200">
          Specialized condensed curriculum for both community teachers and
          out-of-school children, giving the students a second chance to get
          back into formal education.
        </p>
      </div>
    </div>
  );
};

AlpCurriculum.propTypes = {
  className: PropTypes.string,
};

export default AlpCurriculum;
