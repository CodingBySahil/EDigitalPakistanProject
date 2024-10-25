import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa";
import { useGetScreenWidth } from "./useGetScreenWidth";
import { FaArrowRightLong } from "react-icons/fa6";
import { sideBarToggleFalse992 } from "../../constants/const";
import CourseCalendarToggleButton from "./CourseCalendarToggleButton";

// COMPONENT START
export default function CourseCalendarHeader({ sideBarToggle }) {
  // VARIABLES
  const { screenWidth } = useGetScreenWidth();

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
        className={`grid h-[70px] grid-rows-2 gap-[10px] bg-brand-color-cyan p-[10px] pl-[30px] text-white items-center `}
      >
        {/*  main heading */}
        <div>
          <p>Learn about Adobe XD & Prototyping</p>
        </div>

        {/*  introduction and time */}
        <div className="flex items-center justify-between text-[11px]">
          {/* topic name */}

          <p>Introduction about XD</p>

          <div className="flex items-center justify-between gap-[5px]">
            <span className="font-bold">
              <FaRegClock />
            </span>

            <p>1 hour</p>
          </div>
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
