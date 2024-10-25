import LessonCMP from "./LessonsCMP";
import { useCourseCalendarContext } from "./useCourseCalendarContext";

export default function Lessons() {
  // VARIABLES
  const { lessonsData } = useCourseCalendarContext();

  console.log(lessonsData);

  return (
    <div className="grid grid-rows-[auto_1fr] gap-[10px]">
      {/* Heading */}
      <div>
        <p className="font-bold">Lessons</p>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-[5px] overflow-x-auto">
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
        <LessonCMP />
      </div>
    </div>
  );
}
