import { useEffect, useState } from "react";

// FUNCTION the gets the data for single chapter once clicked from the side bar
export function useGetChapterData() {
  // 2 : but if the chapter is selected than load the data for it
  const [isLoading, setIsLoading] = useState(false);
  const [chapterData, setChapterData] = useState(false);

  useEffect(() => {
    async function getChapterData() {
      try {
        setIsLoading(true);

        const response = await fetch(``);
        const data = await response.json();

        setChapterData(data);
      } catch (error) {
        throw new Error(`Unable to get chapter data Error:${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  return { isLoading, setIsLoading, chapterData, setChapterData };
}
