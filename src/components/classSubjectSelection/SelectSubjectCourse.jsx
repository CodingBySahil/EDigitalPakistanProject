import Footer from "../Footer";
import Heading from "../Heading";
import SubjectCardDisplay from "../SubjectCardDisplay";

// COMPONENT START
export default function SelectSubjectCourse() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="grid h-[100vh] grid-rows-[60px_1fr_auto] gap-[10px]">
      <header className="bg-brand-color-cyan">header</header>
      <main className="grid grid-rows-[auto_1fr] px-[10px]">
        <div>
          <Heading>Select subject</Heading>
        </div>

        <div>main</div>
      </main>
      <Footer />
    </div>
  );
  // JSX
}
// COMPONENT END
