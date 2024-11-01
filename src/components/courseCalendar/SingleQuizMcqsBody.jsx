import PropTypes from "prop-types";

import { brandColorCyan } from "../../constants/brandColors";

function getCorrectColor(
  infoObj,
  index,
  mcqsSubmit,
  attemptedMcqArray,
  questionNumber
) {
  if (!mcqsSubmit) {
    if (infoObj?.optionSelected === index) {
      return "#0e7490";
    } else return brandColorCyan;
  } else {
    // if selected option is true
    if (index === attemptedMcqArray?.[questionNumber]?.correctOption) {
      return "green";
    } else if (
      index === attemptedMcqArray?.[questionNumber]?.optionSelected &&
      attemptedMcqArray?.[questionNumber]?.optionSelected ===
        attemptedMcqArray?.[questionNumber]?.correctOption
    ) {
      return "green";
    } else if (
      index === attemptedMcqArray?.[questionNumber]?.optionSelected &&
      attemptedMcqArray?.[questionNumber]?.optionSelected !==
        attemptedMcqArray?.[questionNumber]?.correctOption
    ) {
      return "red";
    } else {
      return brandColorCyan;
    }
  }
}

// COMPONENT START
export default function SingleQuizMcqsBody({
  questionNumber,
  question,
  optionsArr,
  optionCLicked,
  attemptedMcqArray,
  mcqsSubmit,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="pt-[10px] grid grid-rows-[auto_1fr] gap-[10px]">
      {/* div question */}
      <div className="text-[15px] laptop14:text-[25px] text-white bg-brand-color-lightPink rounded-[8px] px-[5px] py-[3px] font-semibold">
        {`Question : ${question} `}
      </div>

      {/* div options */}
      <div className="flex flex-col gap-[5px]">
        {optionsArr.map((val, index) => (
          <div
            onClick={() => optionCLicked(questionNumber, index)}
            key={index}
            className="rounded-[8px] min-h-[30px] flex items-center p-[5px] text-white"
            style={{
              cursor: mcqsSubmit ? "not-allowed" : "pointer",
              backgroundColor: !attemptedMcqArray?.[questionNumber]?.attempted
                ? brandColorCyan
                : getCorrectColor(
                    attemptedMcqArray?.[questionNumber],
                    index,
                    mcqsSubmit,
                    attemptedMcqArray,
                    questionNumber
                  ),
            }}
          >{`${val}`}</div>
        ))}
      </div>
    </div>
  );
  // JSX
}

SingleQuizMcqsBody.propTypes = {
  question: PropTypes.string,
  optionsArr: PropTypes.array,
  optionCLicked: PropTypes.func,
  attemptedMcqArray: PropTypes.array,
  mcqsSubmit: PropTypes.bool,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
