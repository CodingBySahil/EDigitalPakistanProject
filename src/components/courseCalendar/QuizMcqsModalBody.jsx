import PropTypes from "prop-types";

// FUNCTION
const getGainedScore = (attemptedMcqArray) => {
  const gainedScore = attemptedMcqArray.reduce((acc, val) => {
    if (val?.optionSelected === val?.correctOption) {
      return acc + 10;
    }

    return acc;
  }, 0);

  return gainedScore;
};

// FUNCTION
const getScoreMessage = (gainedScore, totalScore) => {
  const gainedPercentage = (gainedScore / totalScore) * 100;

  if (gainedPercentage < 50) {
    return `${gainedPercentage.toFixed(2)}%  Fail 😡`;
  } else if (gainedPercentage >= 50 && gainedPercentage <= 69) {
    return `${gainedPercentage.toFixed(2)}%  Good 🙂`;
  } else if (gainedPercentage >= 70 && gainedPercentage <= 84) {
    return `${gainedPercentage.toFixed(2)}%  Very good 😊`;
  } else if (gainedPercentage >= 85 && gainedPercentage <= 100) {
    return `${gainedPercentage.toFixed(2)}%  Excellent 😄`;
  }
};

// COMPONENT START
export default function QuizMcqsModalBody({ attemptedMcqArray = [] }) {
  // VARIABLES
  const totalScore = attemptedMcqArray?.length * 10;
  const gainedScore = getGainedScore(attemptedMcqArray);

  // FUNCTIONS

  // JSX
  return (
    <div
      className="h-[200px] w-[280px] bg-white rounded-[8px] p-[30px] flex flex-col gap-[15px]"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* Modal title */}
      <header className="flex justify-center">
        <h2 id="modal-title" className="font-bold text-[20px] m-0">
          You scored
        </h2>
      </header>

      {/* Score */}
      <section className="flex justify-center">
        <p
          className="text-[30px]"
          aria-label={`Your score is ${gainedScore} out of ${totalScore}`}
        >
          <span className="text-brand-color-cyan font-extralight">
            {gainedScore}{" "}
          </span>
          <span className="font-bold">/ {totalScore}</span>
        </p>
      </section>

      {/* Feedback */}
      <section className="flex justify-center">
        <p className="font-semibold text-[18px]">
          {getScoreMessage(gainedScore, totalScore)?.trim()}
        </p>
      </section>
    </div>
  );
  // JSX
}

QuizMcqsModalBody.propTypes = {
  propName: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
