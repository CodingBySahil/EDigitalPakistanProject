import PropTypes from "prop-types";
import { IoBookSharp } from "react-icons/io5";

export default function LessonCMP({
  type = "lessons",
  lessonData,
  chapterNo,
  bgColor = "pink",
  quizDetails = {},
}) {
  // JSX
  return (
    <div
      className="grid min-h-[40px] w-full cursor-pointer grid-cols-[10%_70%_50px] items-center gap-[5px] text-nowrap rounded-[5px] p-[5px] text-[10px]"
      style={{ backgroundColor: bgColor }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center">
        <IoBookSharp size={15} />
      </div>

      {/* Lesson Title */}
      <div className="overflow-hidden">
        {type === "lessons" && (
          <p className="truncate">
            {`Lesson ${chapterNo} : ${lessonData?.name}`}
          </p>
        )}
        {type === "quiz" && (
          <p className="truncate">
            {`Lesson ${quizDetails?.quizNumber} : ${quizDetails?.quizType}`}
          </p>
        )}
      </div>

      {/* Duration */}
      <div>
        <p>30 mins</p>
      </div>
    </div>
  );
}

LessonCMP.propTypes = {
  lessonData: PropTypes.object,
  chapterNo: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bgColor: PropTypes.string,
  type: PropTypes.string,
  quizDetails: PropTypes.object,
};
