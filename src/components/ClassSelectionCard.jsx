import PropTypes from "prop-types";

import Heading from "./Heading";
import { brandColorCyan } from "../constants/brandColors";
import AppButton from "./AppButton";
import { useNavigate } from "react-router-dom";

// COMPONENT START
export default function ClassSelectionCard({ classNumber = 0, url = "" }) {
  // VARIABLES
  const navigate = useNavigate();

  // FUNCTIONS
  const viewCourseClicked = () => {
    console.log("Hello");
    navigate(url);
  };

  // JSX
  return (
    <div
      style={{ border: `1px solid ${brandColorCyan}` }}
      className="grid min-h-[80px] grid-cols-[1fr_50%] rounded-[5px] bg-brand-color-cyan/30 p-[10px]"
    >
      <Heading headingColor={brandColorCyan}>
        Class {classNumber}
        {classNumber === 1
          ? "st"
          : classNumber === 2
            ? "nd"
            : classNumber === 3
              ? "rd"
              : "th"}
      </Heading>
      <div className="flex items-end justify-end">
        <AppButton onClick={() => viewCourseClicked(url)}>
          View courses
        </AppButton>
      </div>
    </div>
  );
  // JSX
}

ClassSelectionCard.propTypes = {
  classNumber: PropTypes.number,
  url: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

// COMPONENT END
