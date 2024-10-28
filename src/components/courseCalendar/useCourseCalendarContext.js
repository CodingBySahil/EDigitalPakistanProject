import { useContext } from "react";
import { courseCalendarContext } from "./CourseCalendar";

export function useCourseCalendarContext() {
  const { lessonsData, setLessonsData, isShowing, setIsShowing } = useContext(
    courseCalendarContext
  );

  // console.log(lessonsData);

  return {
    lessonsData,
    setLessonsData,
    isShowing,
    setIsShowing,
  };
}
