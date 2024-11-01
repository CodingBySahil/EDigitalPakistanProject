import { useEffect, useState } from "react";
import { Slider } from "@mui/material";
import { HiArrowSmallRight } from "react-icons/hi2";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

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
    // const newArr = Array.from({ length: dataMcqs.length }, () => ({
    //   attempted: false,
    //   attemptedMcqNumber: null,
    //   optionSelected: null,
    // }));
    // setAttemptedMcqArray(newArr);

    const newArr = dataMcqs?.map((val) => {
      const newObj = {
        attempted: false,
        attemptedMcqNumber: null,
        optionSelected: null,
        correctOption: val?.correctOption,
      };

      return newObj;
    });

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
        correctOption: dataMcqs?.[mcqsNumber]?.correctOption,
      };

      // 3. Return the updated array
      return newArr;
    });
  };

  //    FUNCTION
  const submitButtonClicked = () => {
    let readyToSubmit = true;

    attemptedMcqArray.forEach((val) => {
      if (val.attempted === false) {
        readyToSubmit = false;
        return;
      }
    });

    if (readyToSubmit) {
      console.log("ready to submit");
    } else {
      toast.warn("Please attempt all MCQs", {
        style: {
          width: "250px", // Set the width of the toast
          borderRadius: "8px", // Set the corner radius for rounded corners
          margin: "0 auto", // Center the toast horizontally
          position: "absolute",
          top: "10px", // Position from the top
          left: "50%", // Center the toast
          transform: "translateX(-50%)", // Adjust positioning to center
        },
        duration: 5000, // Duration for which the toast is visible
      });
    }
  };

  // JSX
  if (statusMcqs === "success") {
    return (
      <div className="h-[100%]">
        {/* Quiz header */}
        <QuizHeader />

        {/* Quiz body */}
        <ScrollableBody>
          <div className="overflow-x-hidden overflow-y-auto  tabS:px-[60px] tabL:px-[100px] laptop14:grid laptop14:grid-cols-3 laptop14:gap-[20px]">
            {dataMcqs.map((val, i) => (
              <div
                key={i}
                style={{ border: "1px solid white" }}
                className="w-[100%] py-[20px] grid grid-rows-[20px_1fr] px-[15px]  rounded-[8px] mt-[20px] bg-brand-color-cyan/30 "
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
            <div className="min-h-[70px] flex justify-end items-center laptop14:justify-start ">
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
