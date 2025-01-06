import LoadingSpinner from "../LoadingSpinner";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import QuizHeader from "./QuizHeader";
import { useGetWordMeanings } from "./useGetWordMeanings";
import ScrollableBody from "../ScrollableBody";
import { useSearchParams } from "react-router-dom";

// COMPONENT START
export default function QuizWordMeaning() {
  // VARIABLES

  const { statusWordMeanings, dataWordMeanings = [] } = useGetWordMeanings();
  const [searchParams] = useSearchParams();
  const chapterCode = searchParams.get("chapter-code");

  // FUNCTIONS

  // JSX
  if (statusWordMeanings === "success" && dataWordMeanings.length > 0) {
    return (
      <div className="flex flex-col gap-[10px]">
        {/* Quiz header */}
        <QuizHeader />

        <ScrollableBody>
          <div className="pb-[60px] tabS:px-[10%]">
            <div className="self-start rounded-[8px] bg-white tabS:text-[23px] tabL:text-[26px]">
              {/* Table header */}
              <TableHeader />

              {/* Table header */}
              <div className="flex flex-col gap-[2px] rounded-[8px] bg-black/10 tabS:text-[22px] tabL:text-[25px]">
                {dataWordMeanings?.map((val, i) => (
                  <TableRow
                    key={i}
                    type={"wordMeaning"}
                    word={val.word}
                    meaning={val.meaning}
                    last={
                      Number(i) === Number(dataWordMeanings?.length - 1)
                        ? true
                        : false
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollableBody>
      </div>
    );
  }
  if (statusWordMeanings === "success" && dataWordMeanings.length === 0) {
    return (
      <LoadingSpinnerContainer>
        <p>No word meaning data for {chapterCode}</p>
      </LoadingSpinnerContainer>
    );
  }
  if (statusWordMeanings === "pending") {
    return (
      <LoadingSpinnerContainer>
        <LoadingSpinner />
      </LoadingSpinnerContainer>
    );
  }
  if (statusWordMeanings === "error") {
    return (
      <div className="flex items-center justify-center">
        <p>An error occured</p>
      </div>
    );
  }

  // JSX
}
// COMPONENT END
