import { createContext, useEffect, useState } from "react";

import CourseCalendarHeader from "./CourseCalendarHeader";
import CourseCalendarSideBar from "./CourseCalendarSideBar";
import LoadingSpinner from "../LoadingSpinner";
import CourseCalendarBody from "./CourseCalendarBody";
import { useGetScreenWidth } from "./useGetScreenWidth";
import { mainURL, sideBarToggleFalse992 } from "../../constants/const";

export const courseCalendarContext = createContext();

// COMPONENT START
export default function CourseCalendar() {
  // VARIABLES
  const [isShowing, setIsShowing] = useState(false);
  const { screenWidth } = useGetScreenWidth();
  const [lessonsData, setLessonsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // FUNCTION
  function sideBarToggle() {
    if (screenWidth >= sideBarToggleFalse992) {
      return;
    } else {
      setIsShowing((isShowing) => !isShowing);
    }
  }

  //FUNCTION gets the lessons names
  useEffect(() => {
    async function getLessonsData() {
      try {
        setIsLoading(true);
        // step 1 : sending a get request
        const response = await fetch(`${mainURL}/api/ENG101/chapter/data`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
            "User-Agent": "Custom-Agent",
          },
          method: "GET",
        });

        const jsonText = await response.text();

        // step 2 : parsing the json
        const data = JSON.parse(jsonText);
        // console.log(data);

        // step 3 : setting the state
        setLessonsData(data);
      } catch (error) {
        throw new Error(`Unable to get lessons data ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }

    getLessonsData();
  }, []);

  // JSX
  if (isLoading === false) {
    return (
      <courseCalendarContext.Provider
        value={{
          lessonsData,
          setLessonsData,
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
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <LoadingSpinner size={30} />
      </div>
    );
  }

  // JSX
}
// COMPONENT END
