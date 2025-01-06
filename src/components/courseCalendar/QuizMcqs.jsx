import Modal from "@mui/material/Modal";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import LoadingSpinner from "../LoadingSpinner";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import QuizHeader from "./QuizHeader";
import ScrollableBody from "../ScrollableBody";
import AllQuizMcqs from "./AllQuizMcqs";
import QuizMcqsModalBody from "./QuizMcqsModalBody";
import { useGetMcqs } from "./useGetMcqs";
import { useSearchParams } from "react-router-dom";

// COMPONENT START
export default function QuizMcqs() {
  // VARIABLES
  // const quizType = useGetQuizType();
  const { statusMcqs = "idle", dataMcqs = [] } = useGetMcqs();
  const [attemptedMcqArray, setAttemptedMcqArray] = useState([]);
  const [mcqsSubmit, setMcqsSubmit] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const chapterCode = searchParams.get("chapter-code");

  // FUNCTIONS

  //    FUNCTION handle open close modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //    FUNCTION
  useEffect(() => {
    const newArr = dataMcqs?.map((val) => {
      const newObj = {
        attempted: false,
        attemptedMcqNumber: null,
        optionSelected: null,
        correctOption: val?.correctOption,
      };

      return newObj;
    });

    setAttemptedMcqArray(newArr);
  }, [dataMcqs]);

  //    FUNCTION
  const optionCLicked = (mcqsNumber, optionClickedNumber) => {
    if (mcqsSubmit) return;
    setAttemptedMcqArray((prevArr) => {
      // 1. Create a copy of prevArr
      const newArr = [...prevArr];

      // 2. Update the specific index
      newArr[mcqsNumber] = {
        attempted: true,
        attemptedMcqNumber: mcqsNumber,
        optionSelected: optionClickedNumber,
        correctOption: dataMcqs?.[mcqsNumber]?.correctOption,
      };

      // 3. Return the updated array
      return newArr;
    });
  };

  //    FUNCTION
  const submitButtonClicked = () => {
    let readyToSubmit = true;

    attemptedMcqArray.forEach((val) => {
      if (val.attempted === false) {
        readyToSubmit = false;
        return;
      }
    });

    if (readyToSubmit) {
      setMcqsSubmit(true);
      handleOpen();
      // console.log(attemptedMcqArray);
    } else {
      toast.warn("Please attempt all MCQs", {
        style: {
          width: "250px", // Set the width of the toast
          borderRadius: "8px", // Set the corner radius for rounded corners
          margin: "0 auto", // Center the toast horizontally
          position: "absolute",
          top: "10px", // Position from the top
          left: "50%", // Center the toast
          transform: "translateX(-50%)", // Adjust positioning to center
        },
        duration: 5000, // Duration for which the toast is visible
      });
    }
  };

  // JSX
  if (statusMcqs === "success" && dataMcqs.length > 0) {
    return (
      <div className="h-[100%]">
        {/* Quiz modal */}
        <div>
          <Modal
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <>
              <QuizMcqsModalBody attemptedMcqArray={attemptedMcqArray} />
            </>
          </Modal>
        </div>

        {/* Quiz header */}
        <QuizHeader />

        {/* Quiz body */}
        <ScrollableBody>
          <AllQuizMcqs
            dataMcqs={dataMcqs}
            submitButtonClicked={submitButtonClicked}
            optionCLicked={optionCLicked}
            attemptedMcqArray={attemptedMcqArray}
            mcqsSubmit={mcqsSubmit}
          />
        </ScrollableBody>
      </div>
    );
  }
  if (statusMcqs === "pending") {
    return (
      <LoadingSpinnerContainer>
        <LoadingSpinner />
      </LoadingSpinnerContainer>
    );
  }
  if (statusMcqs === "success" && dataMcqs.length === 0) {
    return (
      <LoadingSpinnerContainer>
        <p>No mcqs data for {chapterCode} </p>
      </LoadingSpinnerContainer>
    );
  }
  if (statusMcqs === "error") {
    return (
      <LoadingSpinnerContainer>
        <p>An error occured</p>
      </LoadingSpinnerContainer>
    );
  }

  // JSX
}
// COMPONENT END
