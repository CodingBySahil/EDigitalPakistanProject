import { useState } from "react";
import { Slider } from "@mui/material";
import { HiArrowSmallRight } from "react-icons/hi2";

import LoadingSpinner from "../LoadingSpinner";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import QuizHeader from "./QuizHeader";
import { useGetMcqs } from "./useGetMcqs";
import { useGetQuizType } from "./useGetQuizType";

// COMPONENT START
export default function QuizMcqs() {
  // VARIABLES
  const quizType = useGetQuizType();
  const { statusMcqs = "idle", dataMcqs = [] } = useGetMcqs();
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionSelected, setOptionSelected] = useState(false);
  const [currentlySelectedOption, setCurrentlySelectedOption] = useState(null);

  // FUNCTIONS

  //    FUNCTION
  const optionClicked = (selectedOptionIndex) => {
    if (optionSelected) {
    }
    if (!optionSelected) {
      setOptionSelected(true);
      const correctOptionIndex = dataMcqs[currentQuestion]?.correctOption;
      setCurrentlySelectedOption(selectedOptionIndex);

      if (selectedOptionIndex === correctOptionIndex) {
        setScore(
          (score) => (score += Number(dataMcqs[currentQuestion]?.points))
        );
      }
    }
  };

  //    FUNCTION
  const nextButtonClicked = () => {
    setCurrentlySelectedOption(null);
    setOptionSelected(false);
    setCurrentQuestion((currentQuestion) => (currentQuestion += 1));
  };

  // JSX
  if (statusMcqs === "success") {
    return (
      <div className="w-[100%] h-[100%] px-[10px]">
        {/* Quiz header */}
        <QuizHeader />

        {/* Quiz body */}
        <div className="flex justify-center laptop14:justify-start">
          <div
            style={{ border: "1px solid white" }}
            className="w-[100%] pt-[10px] grid grid-rows-[45px_1fr_50px] px-[15px] min-h-[350px] rounded-[8px] mt-[20px] bg-brand-color-cyan/30 tabS:w-[80%] laptop14:w-[40%]"
          >
            {/* quiz progress */}
            <div className="grid grid-rows-2  text-[12px]">
              <div className="flex justify-center items-center">
                <Slider
                  value={score}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={dataMcqs.length * 10}
                  size={"small"}
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p>{`Question no : ${currentQuestion + 1}/${
                    dataMcqs.length
                  }`}</p>
                </div>
                <div>
                  <p>{`Score : ${score}/${dataMcqs.length * 10}`}</p>
                </div>
              </div>
            </div>

            {/* quiz question and option */}
            <div className="pt-[10px] grid grid-rows-[auto_1fr] gap-[10px]">
              {/* div question */}
              <div className="text-[15px] text-white bg-brand-color-lightPink rounded-[8px] px-[5px] py-[3px] font-semibold">
                {`Question : ${dataMcqs[currentQuestion]?.question} `}
              </div>

              {/* div options */}
              <div className="flex flex-col gap-[5px]">
                {dataMcqs[currentQuestion]?.options.map((val, i) => (
                  <div
                    onClick={() => optionClicked(i)}
                    key={i}
                    className="bg-brand-color-cyan rounded-[8px] min-h-[30px] flex items-center p-[5px] text-white"
                    style={{
                      cursor: optionSelected ? "not-allowed" : "pointer",
                      backgroundColor:
                        i === currentlySelectedOption &&
                        currentlySelectedOption ===
                          dataMcqs[currentQuestion]?.correctOption
                          ? "green"
                          : i === currentlySelectedOption &&
                            currentlySelectedOption !==
                              dataMcqs[currentQuestion]?.correctOption
                          ? "red"
                          : "#49BBBD",
                    }}
                  >{`${val}`}</div>
                ))}
              </div>
            </div>

            {/* quiz next button */}
            <div className="flex items-center justify-end">
              {optionSelected && currentQuestion < dataMcqs.length - 1 && (
                <button
                  onClick={() => nextButtonClicked()}
                  style={{ border: "1px solid white" }}
                  className="flex cursor-pointer gap-[8px] items-center rounded-[5px] text-[16px] py-[5px] px-[8px] text-white bg-brand-color-cyan active:bg-brand-color-cyan/50"
                >
                  <p className="flex justify-center items-center">Next</p>
                  <p className="flex justify-center items-center font-bold">
                    <HiArrowSmallRight />
                  </p>
                </button>
              )}
            </div>
          </div>
        </div>
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
