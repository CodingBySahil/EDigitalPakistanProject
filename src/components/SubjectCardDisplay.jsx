import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { brandColorCyan } from "../constants/brandColors";

// COMPONENT START
export default function SubjectCardDisplay({ cardsArr }) {
  return (
    <section className="grid grid-cols-1 gap-8 tabS:grid-cols-2 laptop14:grid-cols-4 laptop14:gap-[60px]">
      {cardsArr.map((val, index) => (
        <div
          id={`subjectCard${index}`}
          key={index}
          style={{ border: `1px solid ${brandColorCyan}` }}
          className="grid min-h-[400px] grid-rows-[300px_1fr_50px] rounded-[8px] bg-brand-color-cyan/40 p-[8px]"
        >
          {/* Image Section */}
          <section className="rounded-[5px] bg-lightsteelblue-200">
            <img
              src={`book-1@2x.png`}
              alt={val?.title}
              className="h-full w-full rounded-[5px] object-cover object-top"
            />
          </section>

          {/* Title Section */}
          <section className="mt-[5px] min-h-[50px] min-w-[200px]">
            <p className="break-words text-[17px] font-bold">{val?.title}</p>
          </section>

          {/* Button Section */}
          <section className="flex items-center justify-end">
            <button className="cursor-pointer rounded-[5px] bg-brand-color-cyan px-[10px] py-[10px] active:bg-brand-color-cyan/80">
              <Link
                className="text-[16px] text-white no-underline"
                to={`/administration/${val?.code}`}
              >
                Upload content
              </Link>
            </button>
          </section>
        </div>
      ))}
    </section>
  );
}

// adding props validation for cardsArr
SubjectCardDisplay.propTypes = {
  cardsArr: PropTypes.array.isRequired,
};
// COMPONENT END
