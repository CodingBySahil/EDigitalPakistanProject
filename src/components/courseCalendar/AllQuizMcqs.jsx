import PropTypes from "prop-types";
import QuizMcqsHeader from "./QuizMcqsHeader";
import SingleQuizMcqsBody from "./SingleQuizMcqsBody";

// COMPONENT START
export default function AllQuizMcqs({
  dataMcqs = [],
  submitButtonClicked,
  optionCLicked,
  attemptedMcqArray = { attemptedMcqArray },
  mcqsSubmit = { mcqsSubmit },
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="overflow-x-hidden overflow-y-auto  tabS:px-[60px] tabL:px-[100px] laptop14:grid laptop14:grid-cols-1 laptop14:gap-[20px] laptop14:text-[25px]">
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
            mcqsSubmit={mcqsSubmit}
          />
        </div>
      ))}
      <div className="min-h-[70px] flex justify-end items-center laptop14:justify-start ">
        <button
          onClick={() => submitButtonClicked()}
          style={{ border: "1px solid white" }}
          className="bg-brand-color-cyan cursor-pointer text-white font-semibold text-[20px] px-[10px] py-[5px] rounded-[8px] active:bg-brand-color-cyan/60
  "
        >
          Submit
        </button>
      </div>
    </div>
  );
  // JSX
}

AllQuizMcqs.propTypes = {
  dataMcqs: PropTypes.array,
  submitButtonClicked: PropTypes.func,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
