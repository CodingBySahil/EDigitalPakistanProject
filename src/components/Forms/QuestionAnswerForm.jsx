import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { mainURL } from "../../constants/const";

const QuestionAnswerForm = ({ subjectNameFromURL }) => {
  const [chapterCode, setChapterCode] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [chapters, setChapters] = useState([]);

  // Fetch chapters from API when component mounts
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(
          `${mainURL}/api/${subjectNameFromURL}/chapter/data`
        );
        const data = await response.json();
        setChapters(data);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();
  }, [subjectNameFromURL]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    // Validation: Ensure both question and answer are filled
    if (!question.trim() || !answer.trim()) {
      setError("Please fill out both the question and the answer.");
      setIsSubmitting(false);
      return;
    }

    const formData = {
      chapterCode,
      question,
      answer,
    };

    // Send a single question-answer pair to the API
    try {
      const response = await fetch(
        `${mainURL}/api/${chapterCode}/qa/data`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const responseText = await response.text();
        throw new Error(responseText || "Something went wrong!");
      }

      const data = await response.json();
      console.log("Success:", data);

      // Reset the form on success
      setQuestion("");
      setAnswer("");
      setSuccess(true);

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000); // 3000 ms = 3 seconds
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
        Add New Question
      </h2>

      {error && (
        <div className="mb-4 rounded bg-red-100 p-3 text-red-700">{error}</div>
      )}

      {success && (
        <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
          Question saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Chapter Code Dropdown */}
        <div>
          <label className="text-lg mb-2 block font-semibold">
            Chapter Code
          </label>
          <select
            value={chapterCode}
            onChange={(e) => setChapterCode(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>
              Select chapter code
            </option>
            {chapters.map((chapter) => (
              <option key={chapter.chapterCode} value={chapter.chapterCode}>
                {chapter.chapterCode} - {chapter.name}
              </option>
            ))}
          </select>
        </div>

        {/* Question Input */}
        <div>
          <label className="mb-1 block font-medium">Question</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter question"
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Answer Input */}
        <div>
          <label className="mb-1 block font-medium">Answer</label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter answer"
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`text-lg w-full rounded-md bg-blue-500 py-3 text-white shadow-md transition-all duration-200 ease-in-out hover:bg-blue-600 ${
            isSubmitting ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Question"}
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
