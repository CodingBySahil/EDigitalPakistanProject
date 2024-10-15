

import { useState } from "react";
import CourseCalendarHeader from "./CourseCalendarHeader";
import CourseCalendarSideBar from "./CourseCalendarSideBar";
import { useGetScreenWidth } from "./useGetScreenWidth";
import { sideBarToggleFalse992 } from "../../constants/const";

// COMPONENT START
export default function CourseCalendar() {
  // VARIABLES
  const [isShowing, setIsShowing] = useState(false);
  const { screenWidth } = useGetScreenWidth();

  // FUNCTION
  function sideBarToggle() {
    if (screenWidth >= sideBarToggleFalse992) {
      return;
    } else {
      setIsShowing((isShowing) => !isShowing);
    }
  }

  // JSX
  return (
    <>
      {/* DIVIDER layout for bigger screens */}
      <>
        {screenWidth >= sideBarToggleFalse992 && (
          <div className="grid h-screen grid-cols-[auto_1fr]">
            {/* div for side bar */}
            <div>
              <CourseCalendarSideBar />
            </div>

            {/* div for header and body */}
            <div className="h-screen w-full">
              {/* header */}
              <div>
                {" "}
                <CourseCalendarHeader />
              </div>

              {/* page body */}
              <div>
                <div className="h-screen bg-brand-color-lightBlue/30">
                  page body
                </div>
              </div>
            </div>
          </div>
        )}
      </>

      {/* DIVIDER layout for mobile & tab  */}
      <>
        {screenWidth < sideBarToggleFalse992 && (
          <div className="relative grid h-screen grid-rows-[auto_1fr]">
            {/*  header */}
            <CourseCalendarHeader
              sideBarToggle={sideBarToggle}
              isShowing={isShowing}
            />

            {/* page body */}
            <div className="bg-brand-color-lightBlue/30">page body</div>

            {/* page side bar */}
            {isShowing && (
              <CourseCalendarSideBar sideBarToggle={sideBarToggle} />
            )}
          </div>
        )}
      </>
    </>
  );
  // JSX
}
// COMPONENT END