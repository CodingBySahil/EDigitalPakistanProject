import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { mainURL } from "../../constants/const";

const QuestionAnswerForm = ({ subjectNameFromURL }) => {
  const [chapterID, setChapterID] = useState("");
  const [questions, setQuestions] = useState([{ question: "", answer: "" }]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [chapters, setChapters] = useState([]);

  // Fetch chapters from API when component mounts
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(
          `${mainURL}/api/${subjectNameFromURL}/chapter/data`,
        );
        const data = await response.json();
        // console.log("Chapters fetched:", data); // Log the response
        setChapters(data); // Set chapters in state
        console.log("chapter", chapters);
        console.log("data", data);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();
  }, [subjectNameFromURL]);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = questions.map((item, i) =>
      i === index ? { ...item, [field]: value } : item,
    );
    setQuestions(updatedQuestions);
  };

  const addQuestionField = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const removeQuestionField = (index) => {
    if (questions.length === 1) return;
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setError(null);
  //   setSuccess(false);

  //   // Validation: Ensure all questions and answers are filled
  //   for (let i = 0; i < questions.length; i++) {
  //     if (!questions[i].question.trim() || !questions[i].answer.trim()) {
  //       setError(`Please fill out all fields for question ${i + 1}.`);
  //       setIsSubmitting(false);
  //       return;
  //     }
  //   }

  //   const formData = {
  //     chapterID,
  //     questions,
  //   };
  //   const api=`${mainURL}/api/${chapters.chapterCode}/qa/data`
  //   console.log(api);

  //   try {
  //     // const response = await fetch(`${mainURL}/api/questions`, {
  //     const response = await fetch(api, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       const responseText = await response.text();
  //       throw new Error(responseText || "Something went wrong!");
  //     }

  //     const data = await response.json();
  //     console.log("Success:", data);

  //     setChapterID("");
  //     setQuestions([{ question: "", answer: "" }]);
  //     setSuccess(true);
  //   } catch (err) {
  //     console.error("Error:", err);
  //     setError(err.message);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    // Validation: Ensure all questions and answers are filled
    for (let i = 0; i < questions.length; i++) {
      if (!questions[i].question.trim() || !questions[i].answer.trim()) {
        setError(`Please fill out all fields for question ${i + 1}.`);
        setIsSubmitting(false);
        return;
      }
    }

    const formData = {
      chapterID,
      questions,
    };

    // Dynamically construct the API endpoint
    try {
      const response = await fetch(`${mainURL}/api/${chapterID}/qa/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const responseText = await response.text();
        throw new Error(responseText || "Something went wrong!");
      }

      const data = await response.json();
      console.log("Success:", data);

      // Reset the form on success
      setChapterID("");
      setQuestions([{ question: "", answer: "" }]);
      setSuccess(true);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl rounded-lg bg-slate-100 p-6 shadow-lg">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Add New Questions
      </h2>

      {error && (
        <div className="mb-4 rounded bg-red-100 p-3 text-red-700">{error}</div>
      )}

      {success && (
        <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
          Questions saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Chapter ID Dropdown */}
        <div>
          <label className="text-lg mb-2 block font-semibold">Chapter ID</label>
          <select
            value={chapterID}
            onChange={(e) => setChapterID(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>
              Select chapter ID
            </option>
            {chapters.map((chapter) => (
              <option key={chapter.chapterCode} value={chapter.chapterCode}>
                {chapter.chapterCode} - {chapter.name}
              </option>
            ))}
          </select>
        </div>

        {/* Questions and Answers */}
        {questions.map((entry, index) => (
          <div key={index} className="mb-4 rounded-md border p-4">
            <h3 className="mb-2 text-xl font-semibold">Question {index + 1}</h3>

            {/* Question Input */}
            <div className="mb-4">
              <label className="mb-1 block font-medium">Question</label>
              <input
                type="text"
                value={entry.question}
                onChange={(e) =>
                  handleQuestionChange(index, "question", e.target.value)
                }
                placeholder="Enter question"
                className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Answer Input */}
            <div className="mb-4">
              <label className="mb-1 block font-medium">Answer</label>
              <textarea
                value={entry.answer}
                onChange={(e) =>
                  handleQuestionChange(index, "answer", e.target.value)
                }
                placeholder="Enter answer"
                className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Remove Question Button */}
            <div className="flex justify-end">
              {questions.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeQuestionField(index)}
                  className="font-semibold text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Add Question Button */}
        <div>
          <button
            type="button"
            onClick={addQuestionField}
            className="w-full rounded-md bg-green-500 px-4 py-2 text-white shadow-md transition-all duration-200 ease-in-out hover:bg-green-600"
          >
            Add Another Question
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`text-lg w-full rounded-md bg-blue-500 py-3 text-white shadow-md transition-all duration-200 ease-in-out hover:bg-blue-600 ${
            isSubmitting ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Questions"}
        </button>
      </form>
    </div>
  );
};

// adding prop type validation
QuestionAnswerForm.propTypes = {
  subjectNameFromURL: PropTypes.string.isRequired,
};
export default QuestionAnswerForm;
