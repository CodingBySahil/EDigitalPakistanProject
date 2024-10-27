import { useSearchParams } from "react-router-dom";
import { useGetChapterData } from "./useGetChapterData";

// COMPONENT START
export default function CourseCalendarBody() {
  // VARIABLES
  const [searchParams] = useSearchParams();
  const chapterNumber =
    Number(searchParams.get("chapterNumber")) || "noChapterSelected";

  const { isLoading, setIsLoading, chapterData, setChapterData } =
    useGetChapterData();

  console.log(chapterNumber);

  // FUNCTIONS

  // JSX

  if (chapterNumber === "noChapterSelected") {
    return (
      <div className="w-[100%] h-[100vh] flex justify-center mt-[50%] font-semibold text-brand-color-cyan">
        <p>Kindly click on a chapter 😊</p>
      </div>
    );
  }

  if (chapterNumber >= 1) {
    return <div>course calendar body</div>;
  }

  // JSX
}
// COMPONENT END
