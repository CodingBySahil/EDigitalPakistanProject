import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useGetMcqs = () => {
  const [dataMcqs, setDataMcqs] = useState([]);
  const [statusMcqs, setStatusMcqs] = useState("idle");
  const [searchParams] = useSearchParams();
  const chapterCode = searchParams.get("chapter-code");

  useEffect(() => {
    const getMcqs = async () => {
      try {
        setStatusMcqs("pending");
        // const response = await fetch(`http://localhost:4000/questions`);
        const response = await fetch(
          `https://lms.digipakistan.com/api/${chapterCode}/exercise/data`,
        );

        if (!response.ok) {
          setStatusMcqs("error");
          const errorMessage = await response.text();
          throw new Error(`Unable to fetch mcqs Error => ${errorMessage}`);
        }

        const responseText = await response.text();

        const { data } = JSON.parse(responseText);

        const convertedData = data.map((item, index) => ({
          id: (index + 1).toString(),
          question: item.question,
          options: [
            item.options.option1,
            item.options.option2,
            item.options.option3,
            item.options.option4,
          ],
          correctOption: Object.values(item.options).indexOf(
            item.correctOption,
          ),
          points: 10, // Assuming each question has 10 points
        }));

        setDataMcqs(convertedData);
        setStatusMcqs("success");
      } catch (error) {
        setStatusMcqs("error");
        throw new Error(`Unable to fetch mcqs Error => ${error.message}`);
      }
    };

    getMcqs();
  }, []);

  return { statusMcqs, dataMcqs };
};
