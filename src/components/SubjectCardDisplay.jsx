import PropTypes from "prop-types";
import SubjectCard from "./SubjectCard";
import { mainURL } from "../constants/const";

export default function SubjectCardDisplay({ cardsArr }) {
  // reading class number from url
  const urlParams = new URLSearchParams(window.location.search);
  const classNumber = urlParams.get("class");
  return (
    <section className="grid grid-cols-1 gap-8 tabS:grid-cols-2 laptop14:grid-cols-4 laptop14:gap-[60px]">
      {cardsArr.map((val, index) => (
        <SubjectCard
          key={index}
          subjectName={val?.title}
          buttonText={"Upload content"}
          buttonUrl={`/administration/${val?.code}?class=${classNumber}`}
          imgPath={`/${val?.subPic}`}
        />
      ))}
    </section>
  );
}

SubjectCardDisplay.propTypes = {
  cardsArr: PropTypes.array,
};
