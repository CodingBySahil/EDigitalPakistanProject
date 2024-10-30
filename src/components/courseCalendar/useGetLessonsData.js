import { useEffect, useState } from "react";
import { mainURL } from "../../constants/const";

export function useGetLessonsData() {
  // VARIABLES
  const [isLoading, setIsLoading] = useState(false);
  const [lessonsData, setLessonsData] = useState([]);

  // FUNCTION gets data for lessons on the sidebar
  useEffect(() => {
    async function getLessonsData() {
      try {
        setIsLoading(true);
        // step 1 : sending a get request
        const response = await fetch(`${mainURL}/api/ENG101/chapter/data`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
            "User-Agent": "Custom-Agent",
          },
          method: "GET",
        });

        // console.log(response);

        if (!response.ok) {
          setLessonsData([
            { name: "name 1", chapterCode: "ENG101CH1" },
            { name: "name 2", chapterCode: "ENG101CH2" },
            { name: "name 3", chapterCode: "ENG101CH3" },
            { name: "name 4", chapterCode: "ENG101CH4" },
            { name: "name 5", chapterCode: "ENG101CH5" },
            { name: "name 6", chapterCode: "ENG101CH6" },
            { name: "name 7", chapterCode: "ENG101CH7" },
            { name: "name 8", chapterCode: "ENG101CH8" },
            { name: "name 9", chapterCode: "ENG101CH9" },
            { name: "name 10", chapterCode: "ENG101CH10" },
            { name: "name 11", chapterCode: "ENG101CH11" },
            { name: "name 12", chapterCode: "ENG101CH12" },
            { name: "name 13", chapterCode: "ENG101CH13" },
            { name: "name 14", chapterCode: "ENG101CH14" },
            { name: "name 15", chapterCode: "ENG101CH15" },
            { name: "name 16", chapterCode: "ENG101CH16" },
          ]);
          // const errorMessage = await response.text();
          // throw new Error(`Unable to fetch lessons data ${errorMessage}`);
        }

        const jsonText = await response.text();

        // step 2 : parsing the json
        const data = JSON.parse(jsonText);
        // console.log(data);

        // step 3 : setting the state
        setLessonsData(data);
        setIsLoading(false);
      } catch (error) {
        setLessonsData([
          { name: "name 1", chapterCode: "ENG101CH1" },
          { name: "name 2", chapterCode: "ENG101CH2" },
          { name: "name 3", chapterCode: "ENG101CH3" },
          { name: "name 4", chapterCode: "ENG101CH4" },
          { name: "name 5", chapterCode: "ENG101CH5" },
          { name: "name 6", chapterCode: "ENG101CH6" },
          { name: "name 7", chapterCode: "ENG101CH7" },
          { name: "name 8", chapterCode: "ENG101CH8" },
          { name: "name 9", chapterCode: "ENG101CH9" },
          { name: "name 10", chapterCode: "ENG101CH10" },
          { name: "name 11", chapterCode: "ENG101CH11" },
          { name: "name 12", chapterCode: "ENG101CH12" },
          { name: "name 13", chapterCode: "ENG101CH13" },
          { name: "name 14", chapterCode: "ENG101CH14" },
          { name: "name 15", chapterCode: "ENG101CH15" },
          { name: "name 16", chapterCode: "ENG101CH16" },
        ]);
        setIsLoading(false);
        // throw new Error(`Unable to get lessons data ${error.message}`);
      }
    }

    getLessonsData();
  }, []);

  return { isLoading, setIsLoading, lessonsData, setLessonsData };
}
