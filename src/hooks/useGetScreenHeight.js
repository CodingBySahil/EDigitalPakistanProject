import { useState, useEffect } from "react";

function useGetScreenHeight() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Function to update screen height
    function updateScreenHeight() {
      setScreenHeight(window.innerHeight);
    }

    // Set initial screen height
    updateScreenHeight();

    // Add event listener for window resize
    window.addEventListener("resize", updateScreenHeight);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenHeight);
    };
  }, []);

  return screenHeight;
}

export default useGetScreenHeight;
