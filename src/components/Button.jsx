import PropTypes from "prop-types";
import ButtonMUI from "@mui/material/Button";

// COMPONENT START
export default function Button({
  variant = "contained",
  children,
  receivedFontWeight = "light",
}) {
  // variables
  const baseColor = "#49BBBD";
  const hoverColor = "#3A9A9C"; // Slightly darker for hover

  return (
    <ButtonMUI
      variant={variant}
      sx={{
        bgcolor: baseColor,
        boxShadow: "none",
        fontWeight:
          receivedFontWeight === "medium"
            ? 500
            : receivedFontWeight === "light"
              ? 300
              : receivedFontWeight === "bold"
                ? 700
                : "",
        "&:hover": {
          bgcolor: hoverColor, // Darker color on hover
          boxShadow: "none",
        },
      }}
    >
      {children}
    </ButtonMUI>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
  receivedFontWeight: PropTypes.string,
};

// COMPONENT END
