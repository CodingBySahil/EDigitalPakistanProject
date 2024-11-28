import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import CourseNavbar from "../../components/courseCalendar/CourseNavbar";
const CourseClassSelection = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <CourseNavbar changeURL={""} />

      {/* Course Title */}
      <section className="mb-12 mt-8 text-center">
        <h2 className="text-3xl font-bold">
          Select the COURSE/CLASS you are intrusted in
        </h2>
      </section>

      {/* Book Cards Section */}
      <section className="grid grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          // array from class 1st to class 8th
          { title: "Class 1st", classLink: "class1st" },
          { title: "Class 2nd", classLink: "class2nd" },
          { title: "Class 3rd", classLink: "class3rd" },
          { title: "Class 4th", classLink: "class4th" },
          { title: "Class 5th", classLink: "class5th" },
          { title: "Class 6th", classLink: "class6th" },
          { title: "Class 7th", classLink: "class7th" },
          { title: "Class 8th", classLink: "class8th" },
        ].map((grade, index) => (
          <Link to={`/class/${grade.classLink}`} key={index}>
            <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src={`eng8th.png`}
                alt={grade.title}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{grade.title}</h3>
                {/* <p className="text-gray-500">by {grade.author}</p> */}
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* CTA Banner */}
      <section className="mt-12 bg-[#1D1C46] px-4 py-10 text-center text-white">
        <h3 className="text-xl font-bold">
          Online coaching lessons for remote learning.
        </h3>
        <p className="mx-auto mt-2 max-w-xl">
          These lessons have been crafted in accordance with the standard
          Student Learning Outcomes (SLOs) outlined in the textbooks to align
          with the curriculum and enhance students learning. These materials are
          intended to supplement classroom teaching for enrolled students.
        </p>
        <button className="mt-6 cursor-pointer rounded-full bg-green-600 px-6 py-2 font-semibold text-white hover:bg-green-700">
          Start learning now
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CourseClassSelection;
