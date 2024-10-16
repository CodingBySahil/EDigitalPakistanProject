// CourseCalendarSideBar.jsx

import PropTypes from "prop-types";
import { IoBookSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useGetScreenWidth } from "./useGetScreenWidth";
import CourseCalendarToggleButton from "./CourseCalendarToggleButton";
import { sideBarToggleFalse992 } from "../../constants/const";

// Define LessonCMP outside to avoid redefinition on every render
function LessonCMP({ bgColor }) {
  return (
    <div
      className="grid h-[30px] w-full grid-cols-[10%_1fr_15%] items-center gap-[5px] text-nowrap rounded-[5px] p-[5px] text-[10px] pb-9 cursor-pointer hover:scale-110"
      style={{ backgroundColor: bgColor }} // Use inline style for dynamic background color
    >
      {/* Icon */}
      <div>
        <IoBookSharp size={15} />
      </div>

      {/* Lesson Title */}
      <div>
        <p>Lesson 01 : Introduction about XD</p>
      </div>

      {/* Duration */}
      <div>
        <p>30 mins</p>
      </div>
    </div>
  );
}

LessonCMP.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

// ChangeSimplification Component
function ChangeSimplification({ colors }) {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-[5px]">
      {/* Heading */}
      <div>
        <p className="font-bold">Change Simplification</p>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-[5px]">
        {colors.map((color, index) => (
          <LessonCMP key={index} bgColor={color} />
        ))}
      </div>
    </div>
  );
}

ChangeSimplification.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// PracticeQuiz Component
function PracticeQuiz() {
  // Assuming PracticeQuiz also needs different colors, you can define them or pass as props
  const practiceColors = ["#e3f0fe","#fcddb4","#e3f0fe","#f9d0ce","#e3f0fe","#fcddb4","#e3f0fe","#f9d0ce","#e3f0fe","#fcddb4","#e3f0fe","#f9d0ce",];

  return (
    <div className="bg-green/80 p-2 rounded">
      {/* Heading */}
      <div className="font-bold mt-10">
        <p className="uppercase">Practice Quiz</p>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-[5px]">
        {practiceColors.map((color, index) => (
          <LessonCMP key={index} bgColor={color} />
        ))}
      </div>
    </div>
  );
}

export default function CourseCalendarSideBar({ sideBarToggle }) {
  // VARIABLES
  const { screenWidth } = useGetScreenWidth();

  // Colors array 
  const colors = ["#49bbbc", "#fdddb4", "#e3f0ff", "#f9d0ce"];

  // JSX
  return (
    <div
      style={{
        position: screenWidth < sideBarToggleFalse992 ? "absolute" : "relative",
      }}
      className="grid h-screen w-[250px] grid-rows-[50px_28%_1fr] bg-white px-[7px]"
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
      <ChangeSimplification colors={colors} />

      {/* Practice Quiz Section */}
      <PracticeQuiz />
    </div>
  );
}

CourseCalendarSideBar.propTypes = {
  sideBarToggle: PropTypes.func.isRequired,
};
