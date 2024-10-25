import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";

// COMPONENT START
export default function LoadingSpinner({ size, thickness = 4 }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div>
      <CircularProgress
        thickness={thickness}
        size={size}
        sx={{ color: "#49BBBD" }}
      />
    </div>
  );
  // JSX
}

LoadingSpinner.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  thickness: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

// COMPONENT END
