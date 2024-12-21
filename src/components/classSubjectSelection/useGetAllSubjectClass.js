import { useEffect, useState } from "react";
import { mainURL } from "../../constants/const";
import { useGetClassNumberQuery } from "../../hooks/useGetClassNumberQuery";

export const useGetAllSubjectClass = () => {
  const [dataClassSubject, setDataClassSubject] = useState([]);
  const [statusClassSubjects, setStatusClassSubjects] = useState("success");
  const classNumber = useGetClassNumberQuery();

  useEffect(() => {
    const getDataClassSubjects = async () => {
      try {
        setStatusClassSubjects("pending");
        const response = await fetch(
          `${mainURL}/api/${classNumber}/subject/data`,
        );

        if (!response.ok) {
          setStatusClassSubjects("error");
          const errorMessage = await response.text();
          throw new Error(
            `Unable to get subject based on class number Error => ${errorMessage}`,
          );
        }

        const responseText = await response.text();

        const { data } = JSON.parse(responseText);

        const correctSubjectArr = data?.map((val) => {
          return {
            subjectName: val?.title,
            subjectCode: val?.code,
            subjectPic: val?.subPic,
            url: "course-calendar",
          };
        });

        setStatusClassSubjects("success");
        setDataClassSubject(correctSubjectArr);
      } catch (error) {
        setStatusClassSubjects("error");
        throw new Error(
          `Unable to get subject based on class number Error => ${error.message}`,
        );
      }
    };
    getDataClassSubjects();

    return () => {
      setDataClassSubject([]);
      setStatusClassSubjects("idle");
    };
  }, [classNumber]);

  return { dataClassSubject, statusClassSubjects };
};
