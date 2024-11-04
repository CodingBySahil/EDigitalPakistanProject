import { Link } from "react-router-dom";
import SubjectCardDisplay from "../SubjectCardDisplay";
import ScrollableBody from "../ScrollableBody";

const allSubjectsArr = [
  {
    subject: "Biolog",
    bookImg: "cell_biology.png",
    url: "/administration/subject1",
  },
  {
    subject: "Physics Devotional",
    bookImg: "physics_devotional.png",
    url: "/administration/subject1",
  },
  {
    subject: "The New Science of Curiosity",
    bookImg: "The New Science of Curiosity.jpg",
    url: "/administration/subject1",
  },

  {
    subject: "Molecular Biology of the Cell",
    bookImg: "cell_biology.png",
    url: "/administration/subject1",
  },
  {
    subject: "The New Science of Curiosity",
    bookImg: "The New Science of Curiosity.jpg",
    url: "/administration/subject1",
  },
  {
    subject: "Biology",
    bookImg: "Biology.jpg",
    url: "/administration/subject1",
  },
  {
    subject: "Physics Devotional",
    bookImg: "physics_devotional.png",
    url: "/administration/subject1",
  },
];

// COMPONENT START
export default function SubjectSelection() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="grid grid-rows-[60px_1fr]">
      {/* DIVIDER Page header */}
      <header className="bg-brand-color-cyan">Header</header>
      <ScrollableBody>
        {/* DIVIDER message   */}
        <section className="min-h-[50px] flex items-center">
          <p className="font-bold text-[18px]">Please select a course</p>
        </section>

        {/* DIVIDER subject cards display */}
        <SubjectCardDisplay cardsArr={allSubjectsArr} />
      </ScrollableBody>
    </div>
  );
  // JSX
}
// COMPONENT END
