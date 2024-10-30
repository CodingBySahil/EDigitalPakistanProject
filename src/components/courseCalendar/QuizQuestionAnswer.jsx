import { useGetQuizType } from "./useGetQuizType";

// COMPONENT START
export default function QuizQuestionAnswer() {
  // VARIABLES
  const quizType = useGetQuizType();

  // FUNCTIONS

  // JSX
  return <div className="w-[100%] h-[100%] px-[10px]">{quizType}</div>;
  // JSX
}
// COMPONENT END
