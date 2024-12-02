import PropTypes from "prop-types";

// COMPONENT START
export default function TableRow({ type, word, meaning, last = false }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  if (type === "wordMeaning") {
    return (
      <div
        className="grid min-h-[30px] grid-cols-[1fr_1fr] bg-white py-[5px]"
        style={{
          borderBottomLeftRadius: last ? "8px" : "0px",
          borderBottomRightRadius: last ? "8px" : "0px",
        }}
      >
        <div className="flex items-center justify-center font-semibold text-black/50">
          {`${word?.at(0)?.toUpperCase()}${word?.slice(1)}`}
        </div>
        <div className="flex items-center justify-start pl-[20px]">{`${meaning?.at(0)?.toUpperCase()}${meaning?.slice(1)}`}</div>
      </div>
    );
  }

  // JSX
}

TableRow.propTypes = {
  type: PropTypes.string,
  word: PropTypes.string,
  meaning: PropTypes.string,
  last: PropTypes.bool,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
