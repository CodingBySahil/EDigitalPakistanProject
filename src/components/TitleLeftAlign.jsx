import PropTypes from "prop-types";

const TitleLeftAlign = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[12.688rem] left-[11.563rem] w-[75.25rem] h-[12.313rem] text-left text-[2.5rem] text-gray-400 font-roboto ${className}`}
    >
      <div className="absolute h-[98.93%] w-full top-[2.13%] right-[0%] bottom-[-1.07%] left-[0%] overflow-hidden">
        <div className="absolute h-[16.32%] w-[34.24%] top-[28.27%] right-[65.76%] bottom-[55.41%] left-[0%] bg-powderblue hidden" />
        <b className="absolute top-[calc(50%_-_46.45px)] left-[0.73%]">
          Explore Course
        </b>
        <div className="absolute w-full top-[69.57%] left-[0%] text-[1.5rem] font-medium text-gray-500 inline-block">
          we ensure that students not only cover the required curriculum but
          also gain a deep understanding of the material, fostering both
          academic success and a love for learning.
        </div>
      </div>
    </div>
  );
};

TitleLeftAlign.propTypes = {
  className: PropTypes.string,
};

export default TitleLeftAlign;
