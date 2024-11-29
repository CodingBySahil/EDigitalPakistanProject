import Heading from "../Heading";
import { useGetQuizType } from "./useGetQuizType";

// COMPONENT START
export default function QuizHeader() {
  // VARIABLES
  const quizType = useGetQuizType();

  // FUNCTIONS

  // JSX
  return (
    <div className="pl-[10px]">
      <Heading>Practice quiz : {quizType.toLocaleLowerCase()}</Heading>
    </div>
  );
  // JSX
}
// COMPONENT END
