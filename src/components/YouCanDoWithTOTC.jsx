import PropTypes from "prop-types";

const YouCanDoWithTOTC = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full h-auto text-left text-base text-slategray-100 font-poppins ${className}`}
    >
      {/* Main wrapper using CSS Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 p-4 lg:p-10">
        {/* Text Section */}
        <div className="relative px-6 py-4">
          <div className="absolute right-0 bottom-44  rounded-full bg-mediumspringgreen-100 w-4 h-4 " />

          {/* Main Text */}
          <div className="relative mt-16">
          {/* Decorative Circles */}
          <div className="absolute top-0 -left-4 -z-10 rounded-full bg-mediumspringgreen-100 w-10 h-10 lg:w-16 lg:h-16" />
            <div className="text-lg sm:text-xl md:text-2xl lg:text-[2.25rem] leading-[160%] font-medium text-darkslateblue-200">
              <span>Everything you can do in a physical classroom, </span>
              <span className="text-turquoise">you can do with DALP</span>
            </div>
            <div className="mt-4 tracking-wide leading-[180%] text-slategray-200">
              This includes reading, words meaning, pronunciation, practice with interactive exercises, long and short questions & answers with AI assistance, test your skills and knowledge with exams, audio visuals aids, communication with physical teachers nearby.
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Decorative Circles on Image Section */}
          <div className="absolute top-0 -left-4 rounded-xl bg-mediumspringgreen-100 w-32 h-32 -z-10 " />
          <div className="absolute -bottom-0 -right-4 rounded-xl bg-deepskyblue-100 w-32 h-32 -z-10 " />

          {/* Image */}
          <img
            className="w-full max-w-lg lg:max-w-xl h-auto rounded-xl object-cover"
            alt="Classroom"
            src="/group-17.svg"
          />
        </div>
      </div>
    </div>
  );
};

YouCanDoWithTOTC.propTypes = {
  className: PropTypes.string,
};

export default YouCanDoWithTOTC;
