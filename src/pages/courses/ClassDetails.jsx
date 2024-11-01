import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import CourseNavbar from "../../components/courseCalendar/CourseNavbar";
import { useParams } from "react-router-dom";
const ClassDetails = () => {
  const { classLink } = useParams();
  return (
    <div className="bg-white text-gray-900">
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
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {[
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
        ].map((subject, index) => (
          <Link to={`${subject.classLink}`} key={index}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
              <img
                src={`../${subject.bookImg}`}
                alt={subject.title}
                className="w-full  object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{subject.title}</h3>
                <p className="text-gray-500">by {subject.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

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
