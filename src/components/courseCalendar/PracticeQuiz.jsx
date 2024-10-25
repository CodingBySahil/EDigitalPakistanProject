import LessonCMP from "./LessonsCMP";

// PracticeQuiz Component
export default function PracticeQuiz() {
  return (
    <div className=" grid grid-rows-[auto_1fr] gap-[10px]">
      {/* Heading */}
      <div className="font-bold">
        <p className="uppercase">Practice Quiz</p>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-[5px]">
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
