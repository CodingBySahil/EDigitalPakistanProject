import { useEffect, useState } from "react";

export const useGetWordMeanings = () => {
  const [dataWordMeanings, setDataWordMeanings] = useState([]);
  const [statusWordMeanings, setStatusWordMeanings] = useState("idle");

  useEffect(() => {
    const getWordMeanings = async () => {
      try {
        setStatusWordMeanings("pending");
        const response = await fetch(`http://localhost:3000/questionsArr`);

        if (!response.ok) {
          setStatusWordMeanings("error");
          const errorMessage = await response.text();
          throw new Error(
            `Unable to fetch word meanings Error => ${errorMessage}`
          );
        }

        const responseText = await response.text();

        const data = JSON.parse(responseText);
        setDataWordMeanings(data);
        setStatusWordMeanings("success");
      } catch (error) {
        setStatusWordMeanings("error");
        throw new Error(
          `Unable to fetch word meanings Error => ${error.message}`
        );
      }
    };

    getWordMeanings();
  }, []);

  return { statusWordMeanings, dataWordMeanings };
};
