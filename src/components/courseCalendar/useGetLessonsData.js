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

        const jsonText = await response.text();

        // step 2 : parsing the json
        const data = JSON.parse(jsonText);
        // console.log(data);

        // step 3 : setting the state
        setLessonsData(data);
        setIsLoading(false);
      } catch (error) {
        throw new Error(`Unable to get lessons data ${error.message}`);
        setIsLoading(false);
      }
    }

    getLessonsData();
  }, []);

  return { isLoading, setIsLoading, lessonsData, setLessonsData };
}
