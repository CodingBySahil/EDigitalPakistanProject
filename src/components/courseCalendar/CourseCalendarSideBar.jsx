import PropTypes from "prop-types";
import { FaArrowLeftLong } from "react-icons/fa6";

import CourseCalendarToggleButton from "./CourseCalendarToggleButton";
import Lessons from "./Lessons";
import PracticeQuiz from "./PracticeQuiz";
import { sideBarToggleFalse992 } from "../../constants/const";
import { useGetScreenWidth } from "../../hooks/useGetScreenWidth";

export default function CourseCalendarSideBar({ sideBarToggle }) {
  // VARIABLES
  const { screenWidth } = useGetScreenWidth();

  // JSX
  return (
    <div
      style={{
        position: screenWidth < sideBarToggleFalse992 ? "absolute" : "relative",
      }}
      className="grid h-screen w-[250px] grid-rows-[50px_40%_1fr] gap-[10px] bg-white px-[7px]"
    >
      {/* Toggle Button */}
      <div>
        {screenWidth < sideBarToggleFalse992 && (
          <CourseCalendarToggleButton
            icon={<FaArrowLeftLong />}
            sideBarToggle={sideBarToggle}
          />
        )}
      </div>

      {/* Change Simplification Section */}
      <Lessons />

      {/* Practice Quiz Section */}
      <PracticeQuiz />
    </div>
  );
}

CourseCalendarSideBar.propTypes = {
  sideBarToggle: PropTypes.func,
};
