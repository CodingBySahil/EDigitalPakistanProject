import { useGetScreenHeight } from "../../hooks/useGetScreenHeight";
import LoadingSpinner from "../LoadingSpinner";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import QuizHeader from "./QuizHeader";
import { useGetQuizType } from "./useGetQuizType";
import { useGetWordMeanings } from "./useGetWordMeanings";

// COMPONENT START
export default function QuizWordMeaning() {
  // VARIABLES

  const { statusWordMeanings, dataWordMeanings } = useGetWordMeanings();
  const screenHeight = useGetScreenHeight();

  // FUNCTIONS

  // JSX
  if (statusWordMeanings === "success") {
    return (
      <div className="pt-[10px]">
        {/* Quiz header */}
        <QuizHeader />

        {/* Quiz body */}
        <div
          className="w-[100%] mt-[10px] pb-[80px] overflow-y-auto overflow-x-hidden flex justify-center tabS:px-[60px] laptop14:pl-[60px] laptop14:pr-[200px] laptop14:w-[70%]"
          style={{ height: `calc(${screenHeight}px - 60px)` }}
        >
          <div className="w-[90%] bg-white self-start rounded-[8px]">
            {/* Table header */}
            <TableHeader />

            {/* Table header */}
            <div className="bg-black/10 flex flex-col gap-[1px] rounded-[8px]">
              {dataWordMeanings.map((val, i) => (
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
      </div>
    );
  }
  if (statusWordMeanings === "pending") {
    return (
      <LoadingSpinnerContainer>
        <LoadingSpinner />
      </LoadingSpinnerContainer>
    );
  }

  // JSX
}
// COMPONENT END
