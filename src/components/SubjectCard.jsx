import PropTypes from "prop-types";
import { brandColorCyan } from "../constants/brandColors";
import { Link } from "react-router-dom";
import AppButton from "./AppButton";

// COMPONENT START
export default function SubjectCard({
  subjectName = "",
  buttonText = "button",
  buttonUrl = "",
  imgPath = "",
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div
      style={{ border: `1px solid ${brandColorCyan}` }}
      className="grid min-h-[400px] w-[full] min-w-[300px] grid-rows-[300px_1fr_50px] rounded-[8px] bg-brand-color-cyan/40 p-[8px]"
    >
      {/* Image Section */}
      <section className="rounded-[5px] bg-stone-200">
        <img
          src={imgPath}
          alt={subjectName}
          className="h-full w-full rounded-[5px] object-cover object-top"
        />
      </section>

      {/* Title Section */}
      <section className="mt-[5px] min-h-[50px] w-[150px]">
        <p className="break-words text-[17px] font-bold">
          {subjectName.charAt(0)?.toUpperCase() +
            subjectName.slice(1)?.toLowerCase()}
        </p>
      </section>

      {/* Button Section */}
      <section className="flex items-end justify-end">
        <AppButton>
          <Link className="text-inherit no-underline" to={buttonUrl}>
            {buttonText}
          </Link>
        </AppButton>
      </section>
    </div>
  );
  // JSX
}

SubjectCard.propTypes = {
  subjectName: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  imgPath: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
