import PropTypes from "prop-types";
import Course6th from "./Course6th";
import Course7th from "./Course7th";
import Course8th from "./Course8th";

const TitleLeftAlign = ({ className = "" }) => {
  return (
    <div
      className={`relative  text-center md:text-left  text-[2.5rem] text-gray-400 font-roboto mt-16  bg-[#ebf5ff] p-4 rounded-lg ${className}`}
    >
      <div className="overflow-hidden">
        
        <b className="">Explore Course</b>
        <div className=" w-full top-[69.57%] left-[0%] text-[1.5rem] font-medium text-gray-500 inline-block">
          we ensure that students not only cover the required curriculum but
          also gain a deep understanding of the material, fostering both
          academic success and a love for learning.
        </div>
      </div>
      <Course6th/>
      <Course7th/>
      <Course8th/>
    </div>
  );
};

TitleLeftAlign.propTypes = {
  className: PropTypes.string,
};

export default TitleLeftAlign;
