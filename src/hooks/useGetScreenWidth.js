import { useEffect, useState } from "react";

export function useGetScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // FUNCTION
  useEffect(() => {
    // FUNCTION will set the curr screen width on the state
    function setCurrScreenWidth() {
      setScreenWidth(window.innerWidth);
    }

    // listens for screen width change
    window.addEventListener("resize", setCurrScreenWidth);

    // remove the event listener
    return () => {
      window.removeEventListener("resize", setCurrScreenWidth);
    };
  }, []);

  return { screenWidth, setScreenWidth };
}