import PropTypes from "prop-types";

// COMPONENT START
export default function QuizMcqsHeader({ currentQuestion, totalQuestions }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="grid grid-rows-2  text-[12px]">
      <div className="flex justify-between items-center">
        <div>
          <p>{`Question no : ${currentQuestion + 1}/${totalQuestions}`}</p>
        </div>
      </div>
    </div>
  );
  // JSX
}

QuizMcqsHeader.propTypes = {
  currentQuestion: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  totalQuestions: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
