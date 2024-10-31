import PropTypes from "prop-types";

import { brandColorCyan } from "../../constants/brandColors";

// function getColorColor(attemptedMcqArray, questionNumber, clickedOptionNumber) {
//   console.log(attemptedMcqArray, questionNumber, clickedOptionNumber);
//   for (let i = 0; i < attemptedMcqArray?.length; i++) {
//     if (attemptedMcqArray?.[i]?.attemptedMcqNumber === questionNumber) {
//       if (attemptedMcqArray?.[i]?.optionSelected === clickedOptionNumber) {
//         return "green";
//       } else {
//         return brandColorCyan;
//       }
//     } else {
//       return brandColorCyan;
//     }
//   }
// }

function getCorrectColor(infoObj, index) {
  if (infoObj?.optionSelected === index) {
    return "green";
  } else return brandColorCyan;
}

// COMPONENT START
export default function SingleQuizMcqsBody({
  questionNumber,
  question,
  optionsArr,
  optionCLicked,
  attemptedMcqArray,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="pt-[10px] grid grid-rows-[auto_1fr] gap-[10px]">
      {/* div question */}
      <div className="text-[15px] text-white bg-brand-color-lightPink rounded-[8px] px-[5px] py-[3px] font-semibold">
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
              cursor: "pointer",
              backgroundColor: !attemptedMcqArray?.[questionNumber]?.attempted
                ? brandColorCyan
                : getCorrectColor(attemptedMcqArray?.[questionNumber], index),
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
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END

// style={{
//     cursor: optionSelected ? "not-allowed" : "pointer",
//     backgroundColor:
//       i === currentlySelectedOption &&
//       currentlySelectedOption ===
//         dataMcqs[currentQuestion]?.correctOption
//         ? "green"
//         : i === currentlySelectedOption &&
//           currentlySelectedOption !==
//             dataMcqs[currentQuestion]?.correctOption
//         ? "red"
//         : "#49BBBD",
//   }}
