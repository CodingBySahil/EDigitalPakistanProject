import PropTypes from "prop-types";

// COMPONENT START
export default function FormLabel({ label }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return <label className="text-[13px] tracking-wider">{label}</label>;
  // JSX
}

FormLabel.propTypes = {
  label: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
