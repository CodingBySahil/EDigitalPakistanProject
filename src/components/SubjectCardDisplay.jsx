
import PropTypes from "prop-types";
import SubjectCard from "./SubjectCard";

export default function SubjectCardDisplay({ cardsArr }) {
  return (
    <section className="grid grid-cols-1 gap-8 tabS:grid-cols-2 laptop14:grid-cols-4 laptop14:gap-[60px]">
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
