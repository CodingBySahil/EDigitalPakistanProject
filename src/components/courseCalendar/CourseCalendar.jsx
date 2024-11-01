import { createContext, useEffect, useState } from "react";

import CourseCalendarHeader from "./CourseCalendarHeader";
import CourseCalendarSideBar from "./CourseCalendarSideBar";
import LoadingSpinner from "../LoadingSpinner";
import CourseCalendarBody from "./CourseCalendarBody";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import { useGetScreenWidth } from "../../hooks/useGetScreenWidth";
import { mainURL, sideBarToggleFalse992 } from "../../constants/const";
import { useGetLessonsData } from "./useGetLessonsData";

export const courseCalendarContext = createContext();

// COMPONENT START
export default function CourseCalendar() {
  // VARIABLES
  const [isShowing, setIsShowing] = useState(false);
  const { screenWidth } = useGetScreenWidth();
  const { isLoading, lessonsData, setLessonsData } = useGetLessonsData();

  // FUNCTION
  function sideBarToggle() {
    if (screenWidth >= sideBarToggleFalse992) {
      return;
    } else {
      setIsShowing((isShowing) => !isShowing);
    }
  }

  //FUNCTION gets the lessons names

  // JSX
  if (isLoading === false) {
    return (
      <courseCalendarContext.Provider
        value={{
          lessonsData,
          setLessonsData,
          isShowing,
          setIsShowing,
        }}
      >
        <>
          {/* DIVIDER layout for bigger screens */}
          <>
            {screenWidth >= sideBarToggleFalse992 && (
              <div className="grid h-screen grid-cols-[auto_1fr] overflow-x-hidden overflow-y-hidden">
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
                      <CourseCalendarBody />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>

          {/* DIVIDER layout for mobile & tab  */}
          <>
            {screenWidth < sideBarToggleFalse992 && (
              <div className="relative grid h-screen grid-rows-[auto_1fr] overflow-x-hidden overflow-y-hidden">
                {/*  header */}
                <CourseCalendarHeader
                  sideBarToggle={sideBarToggle}
                  isShowing={isShowing}
                />

                {/* page body */}
                <div className="bg-brand-color-lightBlue/30">
                  <CourseCalendarBody />
                </div>

                {/* page side bar */}
                {isShowing && (
                  <CourseCalendarSideBar sideBarToggle={sideBarToggle} />
                )}
              </div>
            )}
          </>
        </>
      </courseCalendarContext.Provider>
    );
  } else {
    return (
      <LoadingSpinnerContainer>
        <LoadingSpinner size={30} />
      </LoadingSpinnerContainer>
    );
  }

  // JSX
}
// COMPONENT END
