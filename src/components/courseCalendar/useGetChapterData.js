import { useEffect, useState } from "react";
import { mainURL } from "../../constants/const";
import { useSearchParams } from "react-router-dom";

// FUNCTION the gets the data for single chapter once clicked from the side bar
export function useGetChapterData(chapterCode) {
  // 2 : but if the chapter is selected than load the data for it
  const [chapterData, setChapterData] = useState({});
  const [status, setStatus] = useState("idle");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function getChapterData() {
      try {
        setStatus("pending");
        const response = await fetch(
          `${mainURL}/api/${chapterCode}/content/data`,
          {
            method: "GET",
          },
        );

        if (!response.ok) {
          const errorMessage = await response.text();
          setStatus("error");
          throw new Error(
            `Unable to get chapter content Error => ${errorMessage}`,
          );
        }

        const responseText = await response.text();
        const data = JSON.parse(responseText);

        setChapterData(data?.data?.[0]?.text);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        throw new Error(
          `Unable to get chapter content Error: ${error.message}`,
        );
      }
    }

    if (chapterCode && !searchParams.get("quizType")) {
      getChapterData();
    } else {
      return;
    }
  }, [chapterCode, searchParams]);

  return { status, setStatus, chapterData, setChapterData };
}
