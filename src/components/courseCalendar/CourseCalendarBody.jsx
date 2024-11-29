import LoadingSpinner from "../LoadingSpinner";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import PracticeQuizDisplay from "./PracticeQuizDisplay";
import { useGetScreenHeight } from "../../hooks/useGetScreenHeight";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGetChapterData } from "./useGetChapterData";
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
    if (!searchParams.get("quizType"))
      navigate("/course-calender?chapterNumber=ENG101CH2");
  }, []);

  // JSX

  if (searchParams.get("chapterNumber")) {
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
    if (status === "pending") {
      return (
        <LoadingSpinnerContainer>
          <LoadingSpinner />
        </LoadingSpinnerContainer>
      );
    }
    if (status === "error") {
      return (
        <LoadingSpinnerContainer>
          An error has been occured
        </LoadingSpinnerContainer>
      );
    }
    // <LessonsDisplay />;
  }
  if (searchParams.get("quizType")) {
    return <PracticeQuizDisplay />;
  }

  // JSX
}
// COMPONENT END
