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
  let chapterCode = searchParams.get("chapter-code");
  const { status = "idle", chapterData = "" } = useGetChapterData(chapterCode);
  const chapterDataContainerRef = useRef(null);
  const screenHeight = useGetScreenHeight();
  const { screenWidth } = useGetScreenWidth();

  // FUNCTIONS

  //    FUNCTION Update the innerHTML
  useEffect(() => {
    if (status === "success" && chapterDataContainerRef.current) {
      chapterDataContainerRef.current.innerHTML = chapterData;
    }
  }, [status, chapterData]);

  // JSX

  if (!chapterCode) {
    return (
      <div className="flex h-full items-center justify-center">
        Select a chapter to view details
      </div>
    );
  }
  if (chapterCode) {
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
        <div className="flex h-full items-center justify-center">
          An error has been occured
        </div>
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
