import PropTypes from "prop-types";
import { IoBookSharp } from "react-icons/io5";

export default function LessonCMP() {
  return (
    <div
      className="grid h-[40px] w-full grid-cols-[10%_1fr_15%] gap-[5px] text-nowrap rounded-[5px] p-[5px] text-[10px] items-center"
      style={{ backgroundColor: "pink" }} // Use inline style for dynamic background color
    >
      {/* Icon */}
      <div className="flex justify-center items-center">
        <IoBookSharp size={15} />
      </div>

      {/* Lesson Title */}
      <div>
        <p>Lesson 01 : Introduction about XD</p>
      </div>

      {/* Duration */}
      <div>
        <p>30 mins</p>
      </div>
    </div>
  );
}
