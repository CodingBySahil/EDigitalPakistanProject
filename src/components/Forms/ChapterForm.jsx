import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { mainURL } from "../../constants/const";

const ChapterForm = ({ subjectNameFromURL }) => {
  const [chapName, setChapName] = useState("");
  const [className, setClassName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [chapterCode, setChapterCode] = useState("");
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
        // console.log("Chapters fetched:", data);
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

    const formData = {
      chapName,
      className,
      subjectCode,
      chapterCode,
    };

    try {
      const response = await fetch(
        `${mainURL}/api/${subjectNameFromURL}/chapter/data`,
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

      setChapName("");
      setClassName("");
      setSubjectCode("");
      setChapterCode("");
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
        Add New Chapter
      </h2>

      {error && (
        <div className="mb-4 rounded bg-red-100 p-3 text-red-700">{error}</div>
      )}

      {success && (
        <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
          Chapter saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Chapter Name */}
        <div>
          <label className="text-lg mb-2 block font-semibold">
            Chapter Name
          </label>
          <input
            type="text"
            value={chapName}
            onChange={(e) => setChapName(e.target.value)}
            placeholder="Enter chapter name"
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Class Name */}
        <div>
          <label className="text-lg mb-2 block font-semibold">Class</label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Enter class"
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Dropdown for selecting subject code */}
        <div className="mb-6">
          <label className="text-lg mb-2 block font-semibold">
            Subject code
          </label>
          <select
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
            className="w-full transform rounded-lg border border-gray-300 bg-white p-3 shadow-lg transition duration-200 ease-in-out hover:scale-[1.01] hover:shadow-md focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500"
          >
            <option value="" disabled className="text-gray-500">
              Select a subject code
            </option>
            {chapters.map((chapter) => (
              <option key={chapter.chapterCode} value={chapter.subjectCode}>
                {chapter.subjectCode}
              </option>
            ))}
          </select>
        </div>

        {/* Chapter Code */}
        <div>
          <label className="text-lg mb-2 block font-semibold">
            Chapter Code
          </label>
          <input
            type="text"
            value={chapterCode}
            onChange={(e) => setChapterCode(e.target.value)}
            placeholder="Enter chapter code"
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`text-lg w-full rounded-md bg-blue-500 py-3 text-white shadow-md transition-all duration-200 ease-in-out hover:bg-blue-600 ${
            isSubmitting ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save the Chapter"}
        </button>
      </form>
    </div>
  );
};

// adding prop type validation
ChapterForm.propTypes = {
  subjectNameFromURL: PropTypes.string.isRequired,
};
export default ChapterForm;
