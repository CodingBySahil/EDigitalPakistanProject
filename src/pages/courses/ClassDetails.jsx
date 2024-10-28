import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import CourseNavbar from "../../components/courseCalendar/CourseNavbar";
import { useParams } from "react-router-dom";
const ClassDetails = () => {
  const { classLink } = useParams();
  return (
    <div className="bg-white text-gray-900">
      <h2>Details for {classLink.replace('class', 'Class ')}</h2>
      {/* Header Section */}
      <CourseNavbar/>

      {/* Course Title */}
      <section className="text-center mt-8 mb-12">
        <h2 className="text-3xl font-bold">
          Select the COURSE/CLASS you are intrusted in
        </h2>
      </section>

      {/* Book Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {[
            // array from class 1st to class 8th
          { title: "The New Science Of Curiosity" , author:"by Garden Gordan"},
          {title: "Biology", author: "by Garden Gordan"},
          {title: "Chemistry", author: "by Garden Gordan"},
          {title: "Physics", author: "by Garden Gordan"},
          {title: "Mathematics", author: "by Garden Gordan"},
          {title: "English", author: "by Garden Gordan"},
        ].map((subject, index) => (
          <Link to={`${subject.classLink}`} key={index}>
            <div
              
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={`eng8th.png`}
                alt={subject.title}
                className="w-full object-cover"
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
