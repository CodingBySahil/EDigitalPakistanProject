import { useGetScreenHeight } from "../../hooks/useGetScreenHeight";
import LoadingSpinner from "../LoadingSpinner";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import QuizHeader from "./QuizHeader";
import { useGetQuestionAnswers } from "./useGetQuestionAnswers";
import { useGetQuizType } from "./useGetQuizType";

// COMPONENT START
export default function QuizQuestionAnswer() {
  // VARIABLES
  const quizType = useGetQuizType();
  const { statusQuestionAnswers = "idle", dataQuestionAnswers = [] } =
    useGetQuestionAnswers();
  const screenHeight = useGetScreenHeight();

  // FUNCTIONS

  // JSX
  if (statusQuestionAnswers === "success") {
    return (
      <div className="grid grid-rows-[auto_1fr] gap-[10px]">
        <div>
          <QuizHeader />
        </div>
        <div
          style={{ height: `calc(${screenHeight}px - 60px)` }}
          className="flex w-[100%] flex-col gap-[20px] overflow-x-hidden overflow-y-scroll px-[10px] pb-[50px] mobileL:px-[20px] tabS:px-[60px] laptop14:pr-[400px] laptop14:text-[20px]"
        >
          {dataQuestionAnswers.map((val, i) => (
            <div key={i}>
              {/* div question */}
              <div className="flex font-bold">
                <p>
                  <span className="text-brand-color-cyan">
                    Question {i + 1}:{" "}
                  </span>
                  {val.question}
                </p>
              </div>

              {/* div answer */}
              <div>
                {" "}
                <p>
                  {" "}
                  <span className="text-brand-color-cyan">Ans : </span>{" "}
                  {val.answer}
                </p>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (statusQuestionAnswers === "pending") {
    return (
      <LoadingSpinnerContainer>
        <LoadingSpinner />
      </LoadingSpinnerContainer>
    );
  }

  // JSX
}
// COMPONENT END
