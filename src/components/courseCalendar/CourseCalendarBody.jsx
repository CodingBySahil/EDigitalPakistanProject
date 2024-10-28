import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetChapterData } from "./useGetChapterData";
import LoadingSpinner from "../LoadingSpinner";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import useGetScreenHeight from "../../hooks/useGetScreenHeight";
import { useGetScreenWidth } from "../../hooks/useGetScreenWidth";

// COMPONENT START
export default function CourseCalendarBody() {
  // VARIABLES
  const [searchParams] = useSearchParams();
  let chapterCode = searchParams.get("chapterNumber") || "ENG101CH2";
  const { status = "idle", chapterData = "" } = useGetChapterData(chapterCode);
  const chapterDataContainerRef = useRef(null);
  const navigate = useNavigate();
  const screenHeight = useGetScreenHeight();
  const { screenWidth } = useGetScreenWidth();

  // FUNCTIONS

  //    FUNCTION Update the innerHTML
  useEffect(() => {
    if (status === "success" && chapterDataContainerRef.current) {
      chapterDataContainerRef.current.innerHTML = chapterData;
    }
  }, [status, chapterData]);

  //    FUNCTION
  useEffect(() => {
    navigate("/course-calender?chapterNumber=ENG101CH2");
  }, []);

  // JSX
  if (status === "pending") {
    return (
      <LoadingSpinnerContainer>
        <LoadingSpinner size={30} />
      </LoadingSpinnerContainer>
    );
  }

  if (chapterCode && status === "success") {
    return (
      <div
        className="chapterDataContainer"
        style={{
          height: `calc(${screenHeight}px - 60px)`,
          overflowY: "auto",
          overflowX: "none",
          paddingLeft: screenWidth >= 640 ? "60px" : "20px",
          paddingRight: screenWidth >= 640 ? "60px" : "20px",
          paddingBottom: "20px",
        }}
        ref={chapterDataContainerRef}
      ></div>
    );
  }

  // JSX
}
// COMPONENT END
