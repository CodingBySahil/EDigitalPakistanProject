import PropTypes from "prop-types";

import Heading from "./Heading";
import { brandColorCyan } from "../constants/brandColors";
import AppButton from "./AppButton";
import { useNavigate } from "react-router-dom";

// COMPONENT START
export default function ClassSelectionCard({
  classNumber = 0,
  url = "",
  imgPath = "",
}) {
  // VARIABLES
  const navigate = useNavigate();

  // FUNCTIONS
  const viewCourseClicked = () => {
    navigate(url);
  };

  // JSX
  return (
    <div
      style={{ border: `1px solid ${brandColorCyan}` }}
      className="flex flex-col gap-[10px] rounded-[5px] bg-brand-color-cyan/30 p-[10px] laptop14:h-[800px]"
    >
      <div className="h-[400px] rounded-[3px] bg-stone-100 laptop14:h-[620px]">
        <img
          className="h-full w-full rounded-[3px] object-cover"
          src={imgPath}
        />
      </div>
      <div className="flex flex-col justify-between laptop14:h-[180px]">
        <div>
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
        </div>
        <div className="flex items-end justify-end">
          <AppButton buttonSize="large" onClick={() => viewCourseClicked(url)}>
            View courses
          </AppButton>
        </div>
      </div>
    </div>
  );
  // JSX
}

ClassSelectionCard.propTypes = {
  classNumber: PropTypes.number,
  url: PropTypes.string,
  imgPath: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

// COMPONENT END
