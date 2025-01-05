import LoadingSpinner from "../LoadingSpinner";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import PracticeQuizDisplay from "./PracticeQuizDisplay";
import { useGetScreenHeight } from "../../hooks/useGetScreenHeight";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetChapterData } from "./useGetChapterData";
import { useGetScreenWidth } from "../../hooks/useGetScreenWidth";
import "./course-calendar-body.css";

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

  if (!chapterCode && !searchParams.get("quiz-type")) {
    return (
      <div className="flex h-full items-center justify-center">
        Select a chapter to view details
      </div>
    );
  }
  if (chapterCode && !searchParams.get("quiz-type")) {
    if (chapterCode && status === "success" && chapterData.length === 0) {
      return (
        <LoadingSpinnerContainer>
          <p>No data for {chapterCode}</p>
        </LoadingSpinnerContainer>
      );
    }
    if (chapterCode && status === "success" && chapterData.length > 0) {
      return (
        <div
          className="chapterDataContainer custom-font-size"
          style={{
            height: `calc(${screenHeight}px - 60px)`,
            overflowY: "auto",
            overflowX: "none",
            paddingLeft: screenWidth >= 640 ? "60px" : "20px",
            paddingRight: screenWidth >= 640 ? "60px" : "20px",
            paddingBottom: "20px",
            fontSize:
              screenWidth >= 320
                ? "12px"
                : screenWidth >= 600
                  ? "18px"
                  : "18px",
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

  if (searchParams.get("quiz-type")) {
    return <PracticeQuizDisplay />;
  }

  // JSX
}
// COMPONENT END
