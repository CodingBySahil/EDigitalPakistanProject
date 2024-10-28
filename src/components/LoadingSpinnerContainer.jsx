import PropTypes from "prop-types";

// COMPONENT START
export default function LoadingSpinnerContainer({ children }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      {children}
    </div>
  );
  // JSX
}

LoadingSpinnerContainer.propTypes = {
  children: PropTypes.element,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
