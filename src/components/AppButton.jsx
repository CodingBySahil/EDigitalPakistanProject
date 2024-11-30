import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { brandColorCyan } from "../constants/brandColors";

// COMPONENT START
export default function AppButton({
  children,
  buttonType = "primary",
  onClick = () => {},
  buttonSize = "small",
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  if (buttonType === "primary") {
    return (
      <Button
        onClick={() => onClick()}
        sx={{
          bgcolor: brandColorCyan,
        }}
        variant="contained"
        disableElevation={true}
        size={buttonSize}
      >
        {children}
      </Button>
    );
  }

  // JSX
}

AppButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
  buttonSize: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
