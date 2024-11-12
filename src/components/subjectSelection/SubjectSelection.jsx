import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SubjectCardDisplay from "../SubjectCardDisplay";
import ScrollableBody from "../ScrollableBody";
import CourseNavbar from "../courseCalendar/CourseNavbar";
import { mainURL } from "../../constants/const";

export default function SubjectSelection() {
  // VARIABLES
  const [allSubjectsArray, setAllSubjectsArray] = useState([]);

  // FUNCTIONS
  useEffect(() => {
    async function fetchSubjects() {
      try {
        const response = await fetch(`${mainURL}/api/subject/data`);
        const result = await response.json();
        setAllSubjectsArray(result.data); // Access the array inside the "data" property
      } catch (error) {
        console.error("Failed to fetch subjects:", error);
      }
    }
    fetchSubjects();
  }, []); // Empty dependency array ensures this runs once on mount

  // JSX
  return (
    <div className="grid grid-rows-[60px_1fr]">
      {/* Page header */}
      <CourseNavbar />
      <ScrollableBody>
        {/* Message */}
        <section className="min-h-[50px] flex items-center">
          <p className="font-bold text-[18px]">Please select a course</p>
        </section>

        {/* Subject cards display */}
        <SubjectCardDisplay cardsArr={allSubjectsArray} />
      </ScrollableBody>
    </div>
  );
}
