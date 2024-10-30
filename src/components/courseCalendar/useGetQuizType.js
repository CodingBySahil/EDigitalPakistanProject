import { useSearchParams } from "react-router-dom";

export const useGetQuizType = () => {
  const [searchParams] = useSearchParams();
  const quizType = searchParams.get("quizType");

  return quizType;
};
