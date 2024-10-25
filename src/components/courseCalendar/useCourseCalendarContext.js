import { useContext } from "react";
import { courseCalendarContext } from "./CourseCalendar";

export function useCourseCalendarContext() {
  const { lessonsData, setLessonsData } = useContext(courseCalendarContext);

  return {
    lessonsData,
    setLessonsData,
  };
}
