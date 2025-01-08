import LoadingSpinner from "../LoadingSpinner";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import PracticeQuizDisplay from "./PracticeQuizDisplay";
import { useGetScreenHeight } from "../../hooks/useGetScreenHeight";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetChapterData } from "./useGetChapterData";
import { useGetScreenWidth } from "../../hooks/useGetScreenWidth";
import "./course-calendar-body.css";
import { mainURL } from "../../constants/const";

// COMPONENT START
export default function CourseCalendarBody() {
  // VARIABLES
  const [searchParams] = useSearchParams();
  let chapterCode = searchParams.get("chapter-code");
  const { status = "idle", chapterData = "" } = useGetChapterData(chapterCode);
  const chapterDataContainerRef = useRef(null);
  const screenHeight = useGetScreenHeight();
  const { screenWidth } = useGetScreenWidth();

  // FUNCTION Update the innerHTML
  useEffect(() => {
    if (status === "success" && chapterDataContainerRef.current) {
      let content = `<div style="display: flex; flex-direction: column; gap: 20px; margin-top:10px">`;
      for (let i = 0; i < chapterData?.length; i++) {
        if (chapterData[i]?.img?.length > 0) {
          if (screenWidth < 600) {
            content += `<div style="display: flex; flex-direction: column; gap: 10px;">
                        <div><img style="width:100%; height:200px; object-fit:cover" src="${mainURL}/${chapterData[i]?.img}" alt="Chapter Image" /></div>
                        <div>${chapterData[i]?.text}</div>
                      </div>`;
          }
          if (screenWidth > 600 && screenWidth < 1500) {
            content += `<div style="display: flex; flex-direction: column; gap: 10px;">
                        <div><img style="width:100%; height:300px; object-fit:cover" src="${mainURL}/${chapterData[i]?.img}" alt="Chapter Image" /></div>
                        <div>${chapterData[i]?.text}</div>
                      </div>`;
          }
          if (screenWidth > 1500) {
            content += `<div style="display: grid; grid-template-columns: 1fr 500px; gap: 10px;">
              <div>${chapterData[i]?.text}</div>
              <div>
                <img style="width: 100%; height: 300px; object-fit: cover;" src="${mainURL}/${chapterData[i]?.img}" alt="Chapter Image" />
              </div>
            </div>`;
          }
        } else {
          content += `<div>${chapterData[i]?.text}</div>`;
        }
      }
      content += `</div>`;

      chapterDataContainerRef.current.innerHTML = content;
    }
  }, [status, chapterData, screenWidth]);

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
            maxWidth:
              screenWidth >= 300
                ? `${screenWidth - 20}px`
                : `${screenWidth - 60}px`,
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
