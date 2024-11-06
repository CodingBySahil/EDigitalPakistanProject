import SubjectCardDisplay from "../../components/SubjectCardDisplay";
import Footer from "../../components/Footer";
import CourseNavbar from "../../components/courseCalendar/CourseNavbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CardsArr = [
  {
    title: "Molecular Biology of the Cell",
    author: "Craig Hogan",
    bookImg: "cell_biology.png",
  },
  // array from class 1st to class 8th
  { title: "Biology", author: "Garen Gordon", bookImg: "Biology.jpg" },
  {
    title: "Physics Devotional",
    author: "Craig Hogan",
    bookImg: "physics_devotional.png",
  },
  {
    title: "The New Science of Curiosity",
    author: "Goren Gordon",
    bookImg: "The New Science of Curiosity.jpg",
  },

  {
    title: "Molecular Biology of the Cell",
    author: "Craig Hogan",
    bookImg: "cell_biology.png",
  },
  {
    title: "The New Science of Curiosity",
    author: "Goren Gordon",
    bookImg: "The New Science of Curiosity.jpg",
  },
  { title: "Biology", author: "Garen Gordon", bookImg: "Biology.jpg" },
  {
    title: "Physics Devotional",
    author: "Craig Hogan",
    bookImg: "physics_devotional.png",
  },
];

const ClassDetails = () => {
  const { classLink } = useParams();
  return (
    <div className="bg-white text-gray-900 px-[15px]">
      {/* Header Section */}
      <CourseNavbar changeURL={"../"} />
      {/* <h2>Details for {classLink.replace('class', 'Class ')}</h2> */}

      {/* Course Title */}
      <section className="text-center mt-8 mb-12">
        <h2 className="text-3xl font-bold">
          All subjects of {classLink.replace("class", "Class ")} are listed
          below, Select the subject you are intrusted in
        </h2>
      </section>

      {/* Book Cards Section */}
      <SubjectCardDisplay cardsArr={CardsArr} />

      {/* CTA Banner */}
      <section className="bg-[#1D1C46] text-white text-center py-10 mt-12 px-4">
        <h3 className="text-xl font-bold">
          Online coaching lessons for remote learning.
        </h3>
        <p className="mt-2 max-w-xl mx-auto">
          These lessons have been crafted in accordance with the standard
          Student Learning Outcomes (SLOs) outlined in the textbooks to align
          with the curriculum and enhance students' learning. These materials
          are intended to supplement classroom teaching for enrolled students.
        </p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 cursor-pointer text-white font-semibold py-2 px-6 rounded-full">
          Start learning now
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ClassDetails;
