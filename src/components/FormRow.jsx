import PropTypes from "prop-types";

// COMPONENT START
export default function FormRow({ children }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return <div className="flex flex-col justify-center">{children}</div>;
  // JSX
}

FormRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
