import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const CourseClassSelection = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-semibold text-green-600">E-Digital Pakistan</h1>
        <nav className="space-x-6 text-gray-700">
          <Link href="/" className="hover:text-green-600 no-underline">Home</Link>
          <Link href="/courses" className="hover:text-green-600 no-underline">Courses</Link>
          <Link href="/instructors" className="hover:text-green-600 no-underline">Instructors</Link>
          <Link href="/blog" className="hover:text-green-600 no-underline">Blog</Link>
          <Link href="/about" className="hover:text-green-600 no-underline">About Us</Link>
        </nav>
        <div className="flex items-center">
          <span className="mr-2">Lina</span>
          <img src="group-88@2x.png" alt="User Profile" className="w-8 h-8 rounded-full" />
        </div>
      </header>

      {/* Course Title */}
      <section className="text-center mt-8 mb-12">
        <h2 className="text-3xl font-bold">Select the COURSE/CLASS you are intrusted in</h2>
      </section>

      {/* Book Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {[
          { title: 'Class 1st' },
          { title: 'Class 2nd' },
          { title: 'Class 3rd' },
          { title: 'Class 4th' },
          { title: 'Class 5th' },
          { title: 'Class 6th' },
          { title: 'Class 7th' },
          { title: 'Class 8th' },
          
        ].map((grade, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
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
        ))}
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1D1C46] text-white text-center py-10 mt-12 px-4">
        <h3 className="text-xl font-bold">Online coaching lessons for remote learning.</h3>
        <p className="mt-2 max-w-xl mx-auto">
          These lessons have been crafted in accordance with the standard Student Learning Outcomes
          (SLOs) outlined in the textbooks to align with the curriculum and enhance students' learning.
          These materials are intended to supplement classroom teaching for enrolled students.
        </p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 cursor-pointer text-white font-semibold py-2 px-6 rounded-full">
          Start learning now
        </button>
      </section>

      {/* Footer */}
      <Footer/>
      
    </div>
  );
};

export default CourseClassSelection;
