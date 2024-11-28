import Footer from "../Footer";
import Heading from "../Heading";
import ScrollableBody from "../ScrollableBody";
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
    <div className="grid h-[100vh] grid-rows-[60px_1fr_auto] gap-[10px]">
      <header className="bg-brand-color-cyan">header</header>
      <ScrollableBody>
        <main className="grid grid-rows-[auto_1fr] gap-[10px] px-[10px]">
          <div>
            <Heading>Select subject</Heading>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-[10px] tabS:grid-cols-2 tabS:gap-[20px] laptop14:grid-cols-4">
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
        </main>
        <Footer />
      </ScrollableBody>
    </div>
  );
  // JSX
}
// COMPONENT END
