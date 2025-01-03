import ClassSelectionCard from "../ClassSelectionCard";
import Heading from "../Heading";

// const classesArr = [
//   {
//     class: 6,
//     url: "/classSelection/subjectSelection?class=6",
//     imgPath: "/classRoomPics/classRoom1.jpg",
//   },
//   {
//     class: 7,
//     url: "/classSelection/subjectSelection?class=7",
//     imgPath: "/classRoomPics/classRoom2.jpg",
//   },
//   {
//     class: 8,
//     url: "/classSelection/subjectSelection?class=8",
//     imgPath: "/classRoomPics/classRoom3.jpg",
//   },
// ];

const classesArr = [
  {
    class: 6,
    url: "/classSelection/subjectSelection?class=6",
    imgPath: "public/class-678-pics/class-6.jpg",
  },
  {
    class: 7,
    url: "/classSelection/subjectSelection?class=7",
    imgPath: "public/class-678-pics/class-7.jpg",
  },
  {
    class: 8,
    url: "/classSelection/subjectSelection?class=8",
    imgPath: "public/class-678-pics/class-8.jpg",
  },
];

// COMPONENT START
export default function ClassSelection() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="flex h-[100vh] w-full flex-col px-[10px] pb-[10px]">
      <header className="flex h-[60px] w-full items-center">
        <Heading>Select class to view courses</Heading>
      </header>

      <main className="grid grid-cols-1 gap-[10px] overflow-x-hidden tabS:grid-cols-2 laptop14:grid-cols-3 laptop14:gap-[30px] laptop14:px-[20px]">
        {classesArr.map((val, i) => (
          <ClassSelectionCard
            key={i}
            classNumber={val?.class}
            url={val?.url}
            imgPath={val?.imgPath}
          />
        ))}
      </main>
    </div>
  );
  // JSX
}
// COMPONENT END
