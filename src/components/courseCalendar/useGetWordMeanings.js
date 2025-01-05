import { useEffect, useState } from "react";
import { mainURL } from "../../constants/const";
import { useSearchParams } from "react-router-dom";

export const useGetWordMeanings = () => {
  const [dataWordMeanings, setDataWordMeanings] = useState([]);
  const [statusWordMeanings, setStatusWordMeanings] = useState("idle");
  const [searchParams] = useSearchParams();
  const chapterCode = searchParams.get("chapter-code");

  useEffect(() => {
    const getWordMeanings = async () => {
      try {
        setStatusWordMeanings("pending");
        // const response = await fetch(`http://localhost:3000/questionsArr`);
        const response = await fetch(
          `${mainURL}/api/${chapterCode}/wordMeaning/data`,
        );

        if (!response.ok) {
          setStatusWordMeanings("error");
          const errorMessage = await response.text();
          throw new Error(
            `Unable to fetch word meanings Error => ${errorMessage}`,
          );
        }

        const responseText = await response.text();

        const { data } = JSON.parse(responseText);

        const correctedData = data?.map((val, i) => {
          return {
            id: i,
            word: val?.word,
            meaning: val?.meaning,
          };
        });

        // setDataWordMeanings(data)
        setDataWordMeanings(correctedData);
        setStatusWordMeanings("success");
      } catch (error) {
        setStatusWordMeanings("error");
        throw new Error(
          `Unable to fetch word meanings Error => ${error.message}`,
        );
      }
    };

    getWordMeanings();
  }, []);

  return { statusWordMeanings, dataWordMeanings };
};
