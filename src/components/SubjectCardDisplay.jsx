import PropTypes from "prop-types";
import SubjectCard from "./SubjectCard";

// COMPONENT START
export default function SubjectCardDisplay({ cardsArr }) {
  console.log(cardsArr);
  return (
    <section className="grid grid-cols-1 gap-[10px] tabS:grid-cols-2 tabS:gap-[20px] laptop14:grid-cols-4">
      {cardsArr.map((val, index) => (
        <SubjectCard
          key={index}
          subjectName={val?.title}
          buttonText={"Upload content"}
          buttonUrl={`/administration/${val?.code}`}
          imgPath={""}
        />
      ))}
    </section>
  );
}

SubjectCardDisplay.propTypes = {
  cardsArr: PropTypes.array,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
