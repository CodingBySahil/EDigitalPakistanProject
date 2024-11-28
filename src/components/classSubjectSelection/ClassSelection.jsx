import { useGetScreenHeight } from "../../hooks/useGetScreenHeight";
import ClassSelectionCard from "../ClassSelectionCard";
import Heading from "../Heading";

const classesArr = [
  { class: 1, url: "/classSelection/subjectSelection?class=1" },
  { class: 2, url: "/classSelection/subjectSelection?class=2" },
  { class: 3, url: "/classSelection/subjectSelection?class=3" },
  { class: 4, url: "/classSelection/subjectSelection?class=4" },
  { class: 5, url: "/classSelection/subjectSelection?class=5" },
  { class: 6, url: "/classSelection/subjectSelection?class=6" },
  { class: 7, url: "/classSelection/subjectSelection?class=7" },
  { class: 8, url: "/classSelection/subjectSelection?class=8" },
  { class: 9, url: "/classSelection/subjectSelection?class=9" },
  { class: 10, url: "/classSelection/subjectSelection?class=10" },
];

// COMPONENT START
export default function ClassSelection() {
  // VARIABLES
  const screenHeight = useGetScreenHeight();

  // FUNCTIONS

  // JSX
  return (
    <div className="flex h-[100vh] w-full flex-col px-[10px] pb-[10px]">
      <header className="flex h-[60px] w-full items-center">
        <Heading>Select class to view courses</Heading>
      </header>

      <main className="grid grid-cols-1 gap-[10px] overflow-x-hidden tabS:grid-cols-2 laptop14:grid-cols-4">
        {classesArr.map((val, i) => (
          <ClassSelectionCard key={i} classNumber={val?.class} url={val?.url} />
        ))}
      </main>
    </div>
  );
  // JSX
}
// COMPONENT END
