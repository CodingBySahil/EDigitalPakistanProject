import { useEffect, useState } from "react";
import { mainURL } from "../../constants/const";

const dummyMarkup = `
<div>

<div>
<h1>Heading 1</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
</div>

<div>
<h1>Heading 1</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
</div>

<div>
<h1>Heading 1</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
</div>

</div>
`;

// FUNCTION the gets the data for single chapter once clicked from the side bar
export function useGetChapterData(chapterCode) {
  // 2 : but if the chapter is selected than load the data for it
  const [chapterData, setChapterData] = useState(false);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    async function getChapterData() {
      try {
        setStatus("pending");
        const response = await fetch(
          `${mainURL}/api/${chapterCode}/content/data`,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
              "User-Agent": "Custom-Agent",
            },
            method: "GET",
          }
        );

        if (!response.ok) {
          setChapterData(dummyMarkup);
          setStatus("success");

          // const errorMessage = await response.text();
          // setStatus("error");
          // throw new Error(
          //   `Unable to remove tenant: ${response.status} - ${errorMessage}`
          // );
        }

        const responseText = await response.text();
        const data = JSON.parse(responseText);

        setChapterData(data?.data?.[0]?.text);
        setStatus("success");
      } catch (error) {
        setChapterData(dummyMarkup);
        setStatus("success");
        // setStatus("error");
        // throw new Error(`Unable to get chapter data. Error: ${error.message}`);
      }
    }

    getChapterData();
  }, [chapterCode]);

  return { status, setStatus, chapterData, setChapterData };
}
