import { useSearchParams } from "react-router-dom";

export const useGetClassNumberQuery = () => {
  const [searchParams] = useSearchParams();
  const classNumber = searchParams.get("class");

  return classNumber;
};
