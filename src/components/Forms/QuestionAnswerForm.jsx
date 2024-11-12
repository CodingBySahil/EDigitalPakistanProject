import React, { useState, useEffect } from "react";
import { mainURL } from "../../constants/const";

const QuestionAnswerForm = ({subjectNameFromURL}) => {
  const [chapterID, setChapterID] = useState("");
  const [questions, setQuestions] = useState([{ question: "", answer: "" }]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [availableChapters, setAvailableChapters] = useState([]);

  // Fetch available chapters (you can replace this with your actual API call)
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const chapters = [
          { id: "CHP001", name: "Chapter One" },
          { id: "CHP002", name: "Chapter Two" },
          { id: "CHP003", name: "Chapter Three" },
        ];
        setAvailableChapters(chapters);
      } catch (err) {
        console.error("Failed to fetch chapters:", err);
        setError("Failed to load chapters. Please try again later.");
      }
    };

    fetchChapters();
  }, []);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = questions.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
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

    try {
      const response = await fetch(
        `${mainURL}/api/questions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }

      const data = await response.json();
      console.log("Success:", data);

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
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add New Questions
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Questions saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Chapter ID Dropdown */}
        <div>
          <label className="block font-semibold text-lg mb-2">Chapter ID</label>
          <select
            value={chapterID}
            onChange={(e) => setChapterID(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>
              Select chapter ID
            </option>
            {availableChapters.map((chapter) => (
              <option key={chapter.id} value={chapter.id}>
                {chapter.id} - {chapter.name}
              </option>
            ))}
          </select>
        </div>

        {/* Questions and Answers */}
        {questions.map((entry, index) => (
          <div key={index} className="border p-4 rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Question {index + 1}</h3>

            {/* Question Input */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Question</label>
              <input
                type="text"
                value={entry.question}
                onChange={(e) =>
                  handleQuestionChange(index, "question", e.target.value)
                }
                placeholder="Enter question"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Answer Input */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Answer</label>
              <textarea
                value={entry.answer}
                onChange={(e) =>
                  handleQuestionChange(index, "answer", e.target.value)
                }
                placeholder="Enter answer"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
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
                  className="text-red-500 hover:text-red-700 font-semibold"
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
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all duration-200 ease-in-out"
          >
            Add Another Question
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 text-lg bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Questions"}
        </button>
      </form>
    </div>
  );
};

export default QuestionAnswerForm;
