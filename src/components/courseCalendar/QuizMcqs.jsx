import { useEffect, useState } from "react";
import { Slider } from "@mui/material";
import { HiArrowSmallRight } from "react-icons/hi2";

import LoadingSpinner from "../LoadingSpinner";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import QuizHeader from "./QuizHeader";
import { useGetMcqs } from "./useGetMcqs";
import { useGetQuizType } from "./useGetQuizType";
import QuizMcqsHeader from "./QuizMcqsHeader";
import ScrollableBody from "../ScrollableBody";
import SingleQuizMcqsBody from "./SingleQuizMcqsBody";

// COMPONENT START
export default function QuizMcqs() {
  // VARIABLES
  const quizType = useGetQuizType();
  const { statusMcqs = "idle", dataMcqs = [] } = useGetMcqs();
  const [attemptedMcqArray, setAttemptedMcqArray] = useState([]);
  console.log(attemptedMcqArray);

  // FUNCTIONS

  //    FUNCTION
  useEffect(() => {
    const newArr = Array.from({ length: dataMcqs.length }, () => ({
      attempted: false,
      attemptedMcqNumber: null,
      optionSelected: null,
    }));
    setAttemptedMcqArray(newArr);
  }, [dataMcqs]);

  //    FUNCTION
  const optionCLicked = (mcqsNumber, optionClickedNumber) => {
    setAttemptedMcqArray((prevArr) => {
      // 1. Create a copy of prevArr
      const newArr = [...prevArr];

      // 2. Update the specific index
      newArr[mcqsNumber] = {
        attempted: true,
        attemptedMcqNumber: mcqsNumber,
        optionSelected: optionClickedNumber,
      };

      // 3. Return the updated array
      return newArr;
    });

    // if (dataMcqs[mcqsNumber]?.correctOption === optionClickedNumber) {
    //   console.log("Correct option clicked");
    // } else {
    //   console.log(`Wrong option clicked`);
    // }
  };

  //    FUNCTION
  const submitButtonClicked = () => {
    console.log("submitButtonClicked");
  };

  // JSX
  if (statusMcqs === "success") {
    return (
      <div className="h-[100%]">
        {/* Quiz header */}
        <QuizHeader />

        {/* Quiz body */}
        <ScrollableBody>
          <div className="overflow-x-hidden overflow-y-auto">
            {dataMcqs.map((val, i) => (
              <div
                key={i}
                style={{ border: "1px solid white" }}
                className="w-[100%] py-[20px] grid grid-rows-[20px_1fr] px-[15px]  rounded-[8px] mt-[20px] bg-brand-color-cyan/30 tabS:w-[80%] laptop14:w-[40%]"
              >
                {/* quiz header*/}
                <QuizMcqsHeader
                  currentQuestion={i}
                  totalQuestions={dataMcqs.length}
                />

                {/* quiz question and option */}
                <SingleQuizMcqsBody
                  questionNumber={i}
                  question={val?.question}
                  optionsArr={val?.options}
                  optionCLicked={optionCLicked}
                  attemptedMcqArray={attemptedMcqArray}
                />
              </div>
            ))}
            <div className="min-h-[70px] flex justify-end items-center ">
              <button
                onClick={() => submitButtonClicked()}
                style={{ border: "1px solid white" }}
                className="bg-brand-color-cyan text-white font-semibold text-[20px] px-[10px] py-[5px] rounded-[8px] active:bg-brand-color-cyan/60
            "
              >
                Submit
              </button>
            </div>
          </div>
        </ScrollableBody>
      </div>
    );
  }
  if (statusMcqs === "pending") {
    return (
      <LoadingSpinnerContainer>
        <LoadingSpinner />
      </LoadingSpinnerContainer>
    );
  }

  // JSX
}
// COMPONENT END
