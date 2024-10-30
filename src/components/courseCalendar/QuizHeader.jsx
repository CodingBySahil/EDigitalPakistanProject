import { useGetQuizType } from "./useGetQuizType";

// COMPONENT START
export default function QuizHeader() {
  // VARIABLES
  const quizType = useGetQuizType();

  // FUNCTIONS

  // JSX
  return (
    <div className="pl-[10px]">
      <p className="font-semibold">
        Practice quiz : {quizType.toLocaleLowerCase()}
      </p>
    </div>
  );
  // JSX
}
// COMPONENT END
