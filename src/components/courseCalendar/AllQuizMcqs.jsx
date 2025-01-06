import PropTypes from "prop-types";
import QuizMcqsHeader from "./QuizMcqsHeader";
import SingleQuizMcqsBody from "./SingleQuizMcqsBody";

// COMPONENT START
export default function AllQuizMcqs({
  dataMcqs = [],
  submitButtonClicked,
  optionCLicked,
  attemptedMcqArray,
  mcqsSubmit,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="overflow-y-auto overflow-x-hidden tabS:px-[60px] tabL:px-[100px] laptop14:grid laptop14:grid-cols-1 laptop14:gap-[20px] laptop14:text-[25px]">
      {dataMcqs.map((val, i) => (
        <div
          key={i}
          style={{ border: "1px solid white" }}
          className="mt-[20px] grid w-[100%] grid-rows-[20px_1fr] rounded-[8px] bg-brand-color-cyan/30 px-[15px] py-[20px]"
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
      <div className="mb-[50px] flex min-h-[70px] items-center justify-end laptop14:justify-start">
        <button
          disabled={mcqsSubmit}
          onClick={() => submitButtonClicked()}
          style={{ border: "1px solid white" }}
          className="cursor-pointer rounded-[8px] bg-brand-color-cyan px-[10px] py-[5px] text-[20px] font-semibold text-white active:bg-brand-color-cyan/60"
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
  optionCLicked: PropTypes.any,
  attemptedMcqArray: PropTypes.array,
  mcqsSubmit: PropTypes.bool,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
