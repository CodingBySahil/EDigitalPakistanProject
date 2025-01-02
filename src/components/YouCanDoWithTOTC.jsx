import PropTypes from "prop-types";
import VideoWithPlayButton from "./Vedio/VideoWithPlayButton";

const YouCanDoWithTOTC = ({ className = "" }) => {
  return (
    <div
      className={`relative h-auto w-full text-left font-poppins text-base text-slategray-100 ${className}`}
    >
      {/* Main wrapper using CSS Grid */}
      <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-2 lg:gap-10 lg:p-10">
        {/* Text Section */}
        <div className="relative px-6 py-4">
          <div className="absolute bottom-44 right-0 h-4 w-4 rounded-full bg-mediumspringgreen-100" />

          {/* Main Text */}
          <div className="relative mt-16">
            {/* Decorative Circles */}
            <div className="absolute -left-4 top-0 -z-10 h-10 w-10 rounded-full bg-mediumspringgreen-100 lg:h-16 lg:w-16" />
            <div className="text-lg md:text-2xl font-medium leading-[160%] text-darkslateblue-200 sm:text-xl lg:text-[2.25rem]">
              <span>Everything you can do in a physical classroom, </span>
              <span className="text-turquoise">you can do with DALP</span>
            </div>
            <div className="mt-4 font-poppins text-[1.2rem] leading-[180%] tracking-wide text-slategray-200">
              This includes reading, words meaning, pronunciation, practice with
              interactive exercises, long and short questions & answers with AI
              assistance, test your skills and knowledge with exams, audio
              visuals aids, communication with physical teachers nearby.
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex items-center justify-center">
          {/* Decorative Circles on Image Section */}
          <div className="absolute -left-4 top-0 -z-10 h-32 w-32 rounded-xl bg-mediumspringgreen-100" />
          <div className="absolute -bottom-0 -right-4 -z-10 h-32 w-32 rounded-xl bg-deepskyblue-100" />

          {/* Image */}
          {/* <img
            className="w-full max-w-lg lg:max-w-xl h-auto rounded-xl object-cover"
            alt="Classroom"
            src="/group-17.svg"
          /> */}
          <VideoWithPlayButton />
        </div>
      </div>
    </div>
  );
};

YouCanDoWithTOTC.propTypes = {
  className: PropTypes.string,
};

export default YouCanDoWithTOTC;
