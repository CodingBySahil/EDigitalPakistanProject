import { useNavigate } from "react-router-dom";
import LessonCMP from "./LessonsCMP";
import { useCourseCalendarContext } from "./useCourseCalendarContext";
import { useEffect, useRef } from "react";

let i = 1;

// FUNCTION
function getBgColor(index) {
  const color1 = "#49BBBD";
  const color2 = "rgba(244, 140, 6, 0.3)";
  const color3 = "rgba(157, 204, 255, 0.3)";
  const color4 = "rgba(238, 100, 91, 0.3)";

  if (index === 0) {
    return color1;
  } else {
    if (i === 1) {
      i = 2;
      return color2;
    }
    if (i === 2) {
      i = 3;
      return color3;
    }
    if (i === 3) {
      i = 1;
      return color4;
    }
  }
}

// COMPONENT START
export default function Lessons() {
  // VARIABLES
  const { lessonsData, setIsShowing } = useCourseCalendarContext();
  const navigate = useNavigate();

  //FUNCTION
  function lessonClicked(val) {
    setIsShowing(false);
    navigate(`?chapterNumber=${val?.chapterCode}`);
  }

  // FUNCTION
  useEffect(() => {
    return () => {
      i = 1; // This will run only when the component unmounts
    };
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr] gap-[10px]">
      {/* Heading */}
      <div>
        <p className="font-bold">Lessons</p>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-[5px] overflow-x-hidden overflow-y-auto">
        {lessonsData.map((val, index) => (
          <div key={index} onClick={() => lessonClicked(val)}>
            <LessonCMP
              bgColor={getBgColor(index)}
              chapterNo={index + 1}
              lessonData={val}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
