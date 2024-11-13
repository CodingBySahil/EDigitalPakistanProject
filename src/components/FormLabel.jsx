import PropTypes from "prop-types";

// COMPONENT START
export default function FormLabel({ htmlFor, label }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <label htmlFor={htmlFor} className="text-[13px] tracking-wider">
      {label}
    </label>
  );
  // JSX
}

FormLabel.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
