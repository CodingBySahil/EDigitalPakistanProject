import { useEffect, useState } from "react";
import { mainURL } from "../../constants/const";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useGetLessonsData() {
  // VARIABLES
  const [status, setStatus] = useState("idle");
  const [lessonsData, setLessonsData] = useState([]);
  const [searchParams] = useSearchParams();
  const subjectCode = searchParams.get("subject-code");
  const navigate = useNavigate();

  // FUNCTION gets data for lessons on the sidebar
  useEffect(() => {
    async function getLessonsData() {
      try {
        setStatus("pending");
        // step 1 : sending a get request
        const response = await fetch(
          `${mainURL}/api/${subjectCode}/chapter/data`,
          {
            method: "GET",
          },
        );

        // console.log(response);

        if (!response.ok) {
          const errorMessage = await response.text();
          setStatus("error");
          throw new Error(`Unable to fetch lessons data ${errorMessage}`);
        }

        const jsonText = await response.text();

        // step 2 : parsing the json
        const data = JSON.parse(jsonText);

        // step 3 : setting the state
        setLessonsData(data);
        setStatus("success");
        navigate(
          `/course-calender?subject-code=${subjectCode}&chapter-code=${data[0]?.chapterCode}&chapter-name=${data[0]?.name}`,
        );
      } catch (error) {
        setStatus("error");
        throw new Error(`Unable to get lessons data ${error.message}`);
      }
    }

    if (!searchParams.get("quiz-type") && subjectCode) {
      getLessonsData();
    } else {
      return;
    }
  }, []);

  return { status, lessonsData, setLessonsData };
}
