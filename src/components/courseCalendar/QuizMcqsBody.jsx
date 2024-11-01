// COMPONENT START
export default function QuizMcqsBody() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="pt-[10px] grid grid-rows-[auto_1fr] gap-[10px]">
      {/* div question */}
      <div className="text-[15px] text-white bg-brand-color-lightPink rounded-[8px] laptop14:text-[25px] px-[5px] py-[3px] font-semibold">
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
  );
  // JSX
}
// COMPONENT END
