import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import CourseCalendarToggleButton from "./CourseCalendarToggleButton";
import { useGetScreenWidth } from "../../hooks/useGetScreenWidth";
import { sideBarToggleFalse992 } from "../../constants/const";
import { useSearchParams } from "react-router-dom";

// COMPONENT START
export default function CourseCalendarHeader({ sideBarToggle }) {
  // VARIABLES
  const { screenWidth } = useGetScreenWidth();
  const [searchParams] = useSearchParams();
  const chapterNumber = searchParams.get("chapter-code")?.slice(-1);
  const chapterName = searchParams.get("chapter-name");

  // FUNCTIONS

  // JSX
  return (
    <header>
      {screenWidth < sideBarToggleFalse992 && (
        <div className="absolute">
          <CourseCalendarToggleButton
            icon={<FaArrowRightLong />}
            sideBarToggle={sideBarToggle}
          />
        </div>
      )}

      <div
        className={`grid h-[70px] grid-rows-2 items-center gap-[10px] bg-brand-color-cyan p-[10px] pl-[30px] text-white`}
      >
        {/*  main heading */}
        <div>
          <p>
            Chapter {chapterNumber} : {chapterName}
          </p>
        </div>
      </div>
    </header>
  );
  // JSX
}
// COMPONENT END

CourseCalendarHeader.propTypes = {
  sideBarToggle: PropTypes.func,
  isShowing: PropTypes.bool,
};
