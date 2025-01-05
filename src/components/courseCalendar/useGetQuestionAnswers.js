import { useEffect, useState } from "react";
import { mainURL } from "../../constants/const";
import { useSearchParams } from "react-router-dom";

export const useGetQuestionAnswers = () => {
  const [dataQuestionAnswers, setDataQuestionAnswers] = useState([]);
  const [statusQuestionAnswers, setStatusQuestionAnswers] = useState("idle");
  const [searchParams] = useSearchParams();
  const chapterCode = searchParams.get("chapter-code");

  useEffect(() => {
    const getQuestionAnswers = async () => {
      try {
        setStatusQuestionAnswers("pending");

        const response = await fetch(`${mainURL}/api/${chapterCode}/qa/data`);

        if (!response.ok) {
          setStatusQuestionAnswers("error");
          const errorMessage = await response.text();
          throw new Error(
            `Unable to fetch question answers Error => ${errorMessage}`,
          );
        }

        const responseText = await response.text();

        const { data } = JSON.parse(responseText);

        setDataQuestionAnswers(data);
        setStatusQuestionAnswers("success");
      } catch (error) {
        setStatusQuestionAnswers("error");
        throw new Error(
          `Unable to fetch question answers Error => ${error.message}`,
        );
      }
    };

    getQuestionAnswers();
  }, [chapterCode]);

  return { statusQuestionAnswers, dataQuestionAnswers };
};
