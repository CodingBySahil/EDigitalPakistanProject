import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { mainURL } from "../../constants/const";

const WordMeaningForm = ({ subjectNameFromURL }) => {
  const [chapterCode, setChapterCode] = useState("");
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
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
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    if (!word.trim() || !meaning.trim()) {
      setError("Please fill out both word and meaning fields.");
      setIsSubmitting(false);
      return;
    }

    if (!chapterCode) {
      setError("Please select a chapter.");
      setIsSubmitting(false);
      return;
    }

    const formData = {
      chapterCode,
      word,
      meaning,
    };

    try {
      const response = await fetch(
        `${mainURL}/api/${chapterCode}/wordMeaning/data`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }

      const data = await response.json();
      console.log("Success:", data);

      setWord("");
      setMeaning("");
      setSuccess(true);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="mx-auto mt-8 max-w-4xl rounded-lg bg-white p-6 shadow-lgf">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Add New Word
      </h2>

      {error && (
        <div className="mb-4 rounded bg-red-100 p-3 text-red-700">{error}</div>
      )}

      {success && (
        <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
          Word saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
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

        <div className="rounded-md border p-4">
          <h3 className="mb-2 text-xl font-semibold">Word</h3>
          <div className="mb-4">
            <label className="mb-1 block font-medium">Word</label>
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Enter word"
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block font-medium">Meaning</label>
            <textarea
              value={meaning}
              onChange={(e) => setMeaning(e.target.value)}
              placeholder="Enter meaning"
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
              rows="3"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className={`text-lg w-full rounded-md bg-blue-500 py-3 text-white shadow-md transition-all duration-200 ease-in-out hover:bg-blue-600 ${
            isSubmitting ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Word"}
        </button>
      </form>
    </div>
  );
};

// adding prop type validation
WordMeaningForm.propTypes = {
  subjectNameFromURL: PropTypes.string.isRequired,
};
export default WordMeaningForm;
