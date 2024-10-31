import { useEffect, useState } from "react";

export const useGetQuestionAnswers = () => {
  const [dataQuestionAnswers, setDataQuestionAnswers] = useState([]);
  const [statusQuestionAnswers, setStatusQuestionAnswers] = useState("idle");

  useEffect(() => {
    const getQuestionAnswers = async () => {
      try {
        setStatusQuestionAnswers("pending");
        const response = await fetch(`http://localhost:5000/questionAnswers`);

        if (!response.ok) {
          setStatusQuestionAnswers("error");
          const errorMessage = await response.text();
          throw new Error(
            `Unable to fetch question answers Error => ${errorMessage}`
          );
        }

        const responseText = await response.text();

        const data = JSON.parse(responseText);
        setDataQuestionAnswers(data);
        setStatusQuestionAnswers("success");
      } catch (error) {
        setStatusQuestionAnswers("error");
        throw new Error(
          `Unable to fetch question answers Error => ${error.message}`
        );
      }
    };

    getQuestionAnswers();
  }, []);

  return { statusQuestionAnswers, dataQuestionAnswers };
};
