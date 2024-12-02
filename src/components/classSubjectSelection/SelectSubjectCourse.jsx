import Footer from "../Footer";
import Heading from "../Heading";
import InAppHeader from "../InAppHeader";
import SubjectCard from "../SubjectCard";

const subjectsArr = [
  { subjectName: "english", subjectCode: "ENG102", url: "course-calendar" },
  { subjectName: "english", subjectCode: "ENG102", url: "course-calendar" },
  { subjectName: "english", subjectCode: "ENG102", url: "course-calendar" },
  { subjectName: "english", subjectCode: "ENG102", url: "course-calendar" },
  { subjectName: "english", subjectCode: "ENG102", url: "course-calendar" },
  { subjectName: "english", subjectCode: "ENG102", url: "course-calendar" },
  { subjectName: "english", subjectCode: "ENG102", url: "course-calendar" },
  { subjectName: "english", subjectCode: "ENG102", url: "course-calendar" },
  { subjectName: "english", subjectCode: "ENG102", url: "course-calendar" },
];

// COMPONENT START
export default function SelectSubjectCourse() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="grid h-[100vh] grid-rows-[50px_1fr] gap-[10px] overflow-x-hidden overflow-y-hidden">
      <InAppHeader />

      <main className="over grid grid-rows-[auto_1fr_auto_auto] gap-[10px] overflow-y-auto">
        <div className="px-[10px] laptop14:px-[20px]">
          <Heading>Select subject</Heading>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-[10px] px-[10px] tabS:grid-cols-2 tabS:gap-[20px] laptop14:grid-cols-3 laptop14:gap-[30px] laptop14:px-[20px]">
            {subjectsArr.map((val, i) => (
              <SubjectCard
                key={i}
                subjectName={val?.subjectName}
                buttonText={"view details"}
                buttonUrl={"/course-calender"}
                imgPath={""}
              />
            ))}
          </div>
        </div>

        <div>x</div>

        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
  // JSX
}
// COMPONENT END
