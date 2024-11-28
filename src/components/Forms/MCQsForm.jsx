import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { mainURL } from "../../constants/const";

const MCQForm = ({ subjectNameFromURL }) => {
  const [chapterCode, setChapterCode] = useState("");
  const [mcq, setMcq] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctOption: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(
          `${mainURL}/api/${subjectNameFromURL}/chapter/data`,
        );
        const data = await response.json();
        setChapters(data);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };
    fetchChapters();
  }, [subjectNameFromURL]);

  const handleMCQChange = (field, value) => {
    setMcq((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    if (!chapterCode) {
      setError("Please select a chapter code.");
      setIsSubmitting(false);
      return;
    }

    const { question, option1, option2, option3, option4, correctOption } = mcq;
    if (
      !question.trim() ||
      !option1.trim() ||
      !option2.trim() ||
      !option3.trim() ||
      !option4.trim() ||
      !correctOption
    ) {
      setError("Please fill in all fields and select the correct option.");
      setIsSubmitting(false);
      return;
    }

    const formData = { chapterCode, ...mcq };

    try {
      const response = await fetch(
        `${mainURL}/api/${chapterCode}/exercise/data`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      ).finally(() => console.log(formData));

      const contentType = response.headers.get("content-type");
      if (!response.ok) {
        const errorData = contentType.includes("application/json")
          ? await response.json()
          : { message: "Unexpected response from server" };
        throw new Error(errorData.message || "Something went wrong!");
      }

      const data = contentType.includes("application/json")
        ? await response.json()
        : { message: "MCQ saved successfully!" };
      console.log("Success:", data);

      setChapterCode("");
      setMcq({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctOption: "",
      });
      setSuccess(true);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Add MCQ
      </h2>

      {error && (
        <div className="mb-4 rounded bg-red-100 p-3 text-red-700">{error}</div>
      )}
      {success && (
        <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
          MCQ saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-lg mb-2 block font-semibold">
            Chapter Code (chapterCode)
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

        <div className="mb-4 rounded-md border p-4">
          <div className="mb-4">
            <label className="mb-1 block font-medium">Question</label>
            <input
              type="text"
              value={mcq.question}
              onChange={(e) => handleMCQChange("question", e.target.value)}
              placeholder="Enter your question"
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-medium">Options</label>
            <div className="space-y-2">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-center">
                  <span className="w-20">Option {num}:</span>
                  <input
                    type="text"
                    value={mcq[`option${num}`]}
                    onChange={(e) =>
                      handleMCQChange(`option${num}`, e.target.value)
                    }
                    placeholder={`Enter option ${num}`}
                    className="flex-1 rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block font-medium">Correct Option</label>
            <select
              value={mcq.correctOption}
              onChange={(e) => handleMCQChange("correctOption", e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="" disabled>
                Select correct option
              </option>
              {[mcq.option1, mcq.option2, mcq.option3, mcq.option4].map(
                (optionText, index) => (
                  <option key={index} value={optionText}>
                    {optionText
                      ? `Option ${index + 1}: ${optionText}`
                      : `Option ${index + 1}`}
                  </option>
                ),
              )}
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

MCQForm.propTypes = {
  subjectNameFromURL: PropTypes.string.isRequired,
};

export default MCQForm;
