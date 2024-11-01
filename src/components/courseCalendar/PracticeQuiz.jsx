import { useNavigate } from "react-router-dom";

import LessonCMP from "./LessonsCMP";
import { useCourseCalendarContext } from "./useCourseCalendarContext";

// COMPONENT START
export default function PracticeQuiz() {
  // VARIABLES
  const navigate = useNavigate();
  const { setIsShowing } = useCourseCalendarContext();

  // FUNCTIONS

  //    FUNCTION
  function quizComponentClicked(quizType) {
    setIsShowing(false);
    navigate(`/course-calender/quiz?quizType=${quizType}`);
  }

  // JSX
  return (
    <div className="grid grid-rows-[auto_1fr] gap-[10px]">
      {/* Heading */}
      <div className="font-bold">
        <p className="uppercase">Practice Quiz</p>
      </div>

      {/* Body */}
      <div className="h-[250px] flex flex-col gap-[5px] overflow-x-hidden overflow-y-auto">
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
