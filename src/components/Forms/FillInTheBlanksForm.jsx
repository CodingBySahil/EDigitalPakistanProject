import { PropTypes } from "prop-types";
import { useState } from "react";
import { mainURL } from "../../constants/const";

const FillInTheBlanksForm = ({ subjectNameFromURL }) => {
  const [answers, setAnswers] = useState(Array(4).fill("")); // Initialize four blanks with empty strings
  const [isSubmitting, setIsSubmitting] = useState(false);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  // URL for API submission
  const API = `${mainURL}/api/${subjectNameFromURL}CH1/mcq/data`;

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare form data to submit answers
    const formData = new FormData();
    answers.forEach((answer, index) => {
      formData.append(`answer${index + 1}`, answer);
    });

    try {
      const response = await fetch(API, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("MCQ answers submitted successfully via API!");
        setAnswers(Array(4).fill("")); // Reset the answers after successful submission
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "An error occurred."}`);
      }
    } catch (error) {
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 max-w-4xl space-y-4 rounded-lg bg-white p-6 shadow-lg"
    >
      {/* Sentence 1 */}
      <div>
        <label className="block">
          Sentence 1: The capital of France is{" "}
          <span className="font-bold">___</span>.
        </label>
        <div className="mt-2 space-x-2">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              className={`rounded-md border p-2 ${
                answers[0] === option ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => handleChange(0, option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Sentence 2 */}
      <div>
        <label className="block">
          Sentence 2: The largest planet in our solar system is{" "}
          <span className="font-bold">___</span>.
        </label>
        <div className="mt-2 space-x-2">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              className={`rounded-md border p-2 ${
                answers[1] === option ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => handleChange(1, option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Sentence 3 */}
      <div>
        <label className="block">
          Sentence 3: The chemical symbol for water is{" "}
          <span className="font-bold">___</span>.
        </label>
        <div className="mt-2 space-x-2">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              className={`rounded-md border p-2 ${
                answers[2] === option ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => handleChange(2, option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Sentence 4 */}
      <div>
        <label className="block">
          Sentence 4: The process by which plants make their food is called{" "}
          <span className="font-bold">___</span>.
        </label>
        <div className="mt-2 space-x-2">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              className={`rounded-md border p-2 ${
                answers[3] === option ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => handleChange(3, option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className={`mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white shadow-md transition-all duration-200 ease-in-out hover:bg-blue-600 ${
          isSubmitting ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Answers"}
      </button>
    </form>
  );
};

// adding prop type validation
FillInTheBlanksForm.propTypes = {
  subjectNameFromURL: PropTypes.string.isRequired,
};
export default FillInTheBlanksForm;
