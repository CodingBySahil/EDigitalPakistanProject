import { useState, useEffect } from "react";

import SubjectCardDisplay from "../SubjectCardDisplay";
import ScrollableBody from "../ScrollableBody";
import { mainURL } from "../../constants/const";

export default function SubjectSelection() {
  // reading class number from url
  const urlParams = new URLSearchParams(window.location.search);
  const classNumber = urlParams.get("class");
  // console.log(classNumber);

  // VARIABLES
  const [allSubjectsArray, setAllSubjectsArray] = useState([]);
  // Retrieve access token from localStorage or a similar storage method
  let userData = localStorage.getItem("user");
  userData = JSON.parse(userData);
  // console.log(userData.accessToken);

  // FUNCTIONS
  useEffect(() => {
    async function fetchSubjects() {
      try {
        const response = await fetch(
          `${mainURL}/api/${classNumber}/subject/data`,
          {
            headers: {
              Authorization: `Bearer ${userData.accessToken}`, // Include the access token in the headers
              "Content-Type": "application/json",
            },
            credentials: "include", // Include cookies in the request if needed
          },
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();
        setAllSubjectsArray(result.data); // Access the array inside the "data" property
      } catch (error) {
        console.error("Failed to fetch subjects:", error);
      }
    }

    fetchSubjects();
  }, []);

  // JSX
  return (
    <div className="grid grid-rows-[60px_1fr]">
      {/* Page header */}
      <header className="bg-brand-color-cyan">header</header>

      <ScrollableBody pageHeaderHeight={60}>
        <div className="p-[10px]">
          {/* Message */}
          <section className="flex min-h-[50px] items-center">
            <p className="text-[18px] font-bold">Please select a course</p>
          </section>

          {/* Subject cards display */}
          <SubjectCardDisplay cardsArr={allSubjectsArray} />
        </div>
      </ScrollableBody>
    </div>
  );
}
