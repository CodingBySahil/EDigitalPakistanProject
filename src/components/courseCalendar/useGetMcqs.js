import { useEffect, useState } from "react";

export const useGetMcqs = () => {
  const [dataMcqs, setDataMcqs] = useState([]);
  const [statusMcqs, setStatusMcqs] = useState("idle");

  useEffect(() => {
    const getMcqs = async () => {
      try {
        setStatusMcqs("pending");
        const response = await fetch(`http://localhost:4000/questions`);

        if (!response.ok) {
          setStatusMcqs("error");
          const errorMessage = await response.text();
          throw new Error(`Unable to fetch mcqs Error => ${errorMessage}`);
        }

        const responseText = await response.text();

        const data = JSON.parse(responseText);
        setDataMcqs(data);
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
