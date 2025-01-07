import PropTypes from "prop-types";
import ExploreCourses from "./ExploreCourses";

const TitleLeftAlign = ({ className = "" }) => {
  return (
    <div
      className={`relative mt-16 rounded-lg bg-[#ebf5ff] p-4 text-center font-roboto text-[2.5rem] text-gray-400 md:text-left ${className}`}
    >
      <div className="overflow-hidden">
        <b className="">Explore Course</b>
        <div className="left-[0%] top-[69.57%] inline-block w-full text-[1.5rem] font-medium text-gray-500">
          we ensure that students not only cover the required curriculum but
          also gain a deep understanding of the material, fostering both
          academic success and a love for learning.
        </div>
      </div>
      {/* hidden on sm and md  */}
      <section className="hidden xl:block">
        {["6", "7", "8"].map((levelOfClass) => (
          <ExploreCourses key={levelOfClass} levelOfClass={levelOfClass} />
        ))}
      </section>
    </div>
  );
};

TitleLeftAlign.propTypes = {
  className: PropTypes.string,
};

export default TitleLeftAlign;
