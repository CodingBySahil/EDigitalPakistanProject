import PropTypes from "prop-types";

// COMPONENT START
export default function FlexCenter({
  children,
  gap = "0",
  tailwindStyles = "",
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div
      className={`flex items-center justify-center gap-[${gap}px] ${tailwindStyles}`}
    >
      {children}
    </div>
  );
  // JSX
}

FlexCenter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  gap: PropTypes.string,
  tailwindStyles: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
