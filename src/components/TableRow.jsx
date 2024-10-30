// COMPONENT START
export default function TableRow({ type, word, meaning, last = false }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  if (type === "wordMeaning") {
    return (
      <div
        className="grid grid-cols-[1fr_1fr] min-h-[30px] bg-white"
        style={{
          borderBottomLeftRadius: last ? "8px" : "0px",
          borderBottomRightRadius: last ? "8px" : "0px",
        }}
      >
        <div className="flex justify-center items-center font-semibold text-black/50">
          {word}
        </div>
        <div className="flex justify-center items-center">{meaning}</div>
      </div>
    );
  }

  // JSX
}
// COMPONENT END
