import PropTypes from "prop-types";
import { IoBookSharp } from "react-icons/io5";

import { FaArrowLeftLong } from "react-icons/fa6";
import { useGetScreenWidth } from "./useGetScreenWidth";
import CourseCalendarToggleButton from "./CourseCalendarToggleButton";
import { sideBarToggleFalse992 } from "../../constants/const";



export default function CourseCalendarSideBar({ sideBarToggle }) {
  // VARIABLES
  const { screenWidth } = useGetScreenWidth();

  //FUNCTIONS

  // JSX
  return (
    <div
      style={{
        position: screenWidth < sideBarToggleFalse992 ? "absolute" : "relative",
      }}
      className="grid h-screen w-[250px] grid-rows-[50px_28%_1fr] bg-white px-[7px]"
    >
      {/* display on off btn */}
      <div>
        {screenWidth < sideBarToggleFalse992 && (
          <CourseCalendarToggleButton
            icon={<FaArrowLeftLong />}
            sideBarToggle={sideBarToggle}
          />
        )}
      </div>

      {/* change simplification */}
      <ChangeSimplification />

      {/* display on off btn */}
      <PracticeQuiz />
    </div>
  );
  // JSX
}

CourseCalendarSideBar.propTypes = {
  sideBarToggle: PropTypes.func,
};

function ChangeSimplification() {
  // JSX
  return (
    <div className="grid grid-rows-[auto_1fr] gap-[5px]">
      {/* heading change simplification */}
      <div>
        <p className="font-bold">Change Simplification</p>
      </div>

      {/* Change simplification body */}
      <div className="bg-green/50 flex flex-col gap-[5px]">
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
      </div>
    </div>
  );
  // JSX
}

function PracticeQuiz() {
  // JSX
  return (
    <div className="bg-green/80">
      {/* heading change simplification */}
      <div className="font-bold">
        <p className="uppercase">Practice Quiz</p>
      </div>

      {/* Change simplification body */}
      <div className="flex h-screen flex-col gap-[5px]">
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
      </div>
    </div>
  );
  // JSX
}

function LessonCMP() {
  // JSX
  return (
    <div className="grid h-[30px] w-full grid-cols-[10%_1fr_15%] items-center gap-[5px] text-nowrap rounded-[5px] bg-yellow-300 p-[5px] px-[5px] text-[10px]">
      {/* div icon */}
      <div>
        <IoBookSharp size={15} />
      </div>

      {/* div lesson */}
      <div>
        <p>Lesson 01 : Introduction about XD</p>
      </div>

      {/* div mins */}
      <div>
        <p>30 mins</p>
      </div>
    </div>
  );
  // JSX
}