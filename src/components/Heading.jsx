import PropTypes from "prop-types";

// COMPONENT START
export default function Heading({
  children,
  headingType = "primary",
  headingColor = "black",
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX

  if (headingType === "primary") {
    return (
      <p
        style={{ color: headingColor }}
        className="text-[18px] font-bold laptop14:text-[22px]"
      >
        {children}
      </p>
    );
  }

  // JSX
}

Heading.propTypes = {
  children: PropTypes.PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  headingType: PropTypes.string,
  headingColor: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
