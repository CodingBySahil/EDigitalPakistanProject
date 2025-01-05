import { useNavigate, useSearchParams } from "react-router-dom";

import LessonCMP from "./LessonsCMP";
import { useCourseCalendarContext } from "./useCourseCalendarContext";

// COMPONENT START
export default function PracticeQuiz() {
  // VARIABLES
  const navigate = useNavigate();
  const { setIsShowing } = useCourseCalendarContext();
  const [searchParams] = useSearchParams();
  const chapterCode = searchParams.get("chapter-code");
  const subjectCode = searchParams.get("subject-code");
  const subjectName = searchParams.get("chapter-name");

  // FUNCTIONS

  //    FUNCTION
  function quizComponentClicked(quizType) {
    setIsShowing(false);
    navigate(
      `/course-calender/quiz?quiz-type=${quizType}&subject-code=${subjectCode}&chapter-code=${chapterCode}&chapter-name=${subjectName}`,
    );
  }

  // JSX
  return (
    <div className="grid grid-rows-[auto_1fr] gap-[10px]">
      {/* Heading */}
      <div className="font-bold">
        <p className="">Exercise</p>
      </div>

      {/* Body */}
      <div className="flex h-[250px] flex-col gap-[5px] overflow-y-auto overflow-x-hidden">
        <div onClick={() => quizComponentClicked("Word/Meanings")}>
          <LessonCMP
            type={"quiz"}
            quizDetails={{ quizNumber: 1, quizType: "Word/Meanings" }}
            bgColor={"#49BBBD"}
            onClick={quizComponentClicked}
          />
        </div>
        <div onClick={() => quizComponentClicked("MCQs")}>
          <LessonCMP
            type={"quiz"}
            quizDetails={{ quizNumber: 2, quizType: "MCQs" }}
            bgColor={"rgba(244, 140, 6, 0.3)"}
            onClick={quizComponentClicked}
          />
        </div>
        <div onClick={() => quizComponentClicked("Question/Answers")}>
          <LessonCMP
            type={"quiz"}
            quizDetails={{ quizNumber: 3, quizType: "Question/Answers" }}
            bgColor={"rgba(157, 204, 255, 0.3)"}
            onClick={quizComponentClicked}
          />
        </div>
      </div>
    </div>
  );
}
