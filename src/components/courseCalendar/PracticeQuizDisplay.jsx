import { useSearchParams } from "react-router-dom";
import QuizWordMeaning from "./QuizWordMeaning";
import QuizMcqs from "./QuizMcqs";
import QuizQuestionAnswer from "./QuizQuestionAnswer";

// COMPONENT START
export default function PracticeQuizDisplay() {
  // VARIABLES
  const [searchParams] = useSearchParams();
  const quizType = searchParams.get("quizType");

  // FUNCTIONS

  // JSX
  if (quizType === "Word/Meanings") {
    return <QuizWordMeaning />;
  }
  if (quizType === "MCQs") {
    return <QuizMcqs />;
  }
  if (quizType === "Question/Answers") {
    return <QuizQuestionAnswer />;
  }
  // JSX
}
// COMPONENT END
