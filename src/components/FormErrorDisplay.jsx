import PropTypes from "prop-types";

// COMPONENT START
export default function FormErrorDisplay({ children }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <p className="mt-[3px] flex items-center text-[11px] text-red-600">{`* ${children}`}</p>
  );
  // JSX
}

FormErrorDisplay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
