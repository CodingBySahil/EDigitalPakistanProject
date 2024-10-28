import PropTypes from "prop-types";
import { IoBookSharp } from "react-icons/io5";

export default function LessonCMP({ lessonData, chapterNo, bgColor = "pink" }) {
  // JSX
  return (
    <div
      className="cursor-pointer grid min-h-[40px] w-full grid-cols-[10%_70%_50px] gap-[5px] text-nowrap rounded-[5px] p-[5px] text-[10px] items-center"
      style={{ backgroundColor: bgColor }} // Use inline style for dynamic background color
    >
      {/* Icon */}
      <div className="flex justify-center items-center">
        <IoBookSharp size={15} />
      </div>

      {/* Lesson Title */}
      <div className="overflow-hidden">
        <p className="truncate">
          {`Lesson ${chapterNo} : ${lessonData?.name}`}
        </p>
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
};
