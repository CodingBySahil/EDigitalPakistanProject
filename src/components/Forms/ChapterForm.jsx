import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams for URL parameters
import { mainURL } from "../../constants/const";

const ChapterForm = () => {
  const { subjectCode } = useParams(); // Extract subjectCode from the URL
  const [chapName, setChapName] = useState("");
  const [className, setClassName] = useState("");
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
          `${mainURL}/api/${subjectCode}/chapter/data`,
        );
        const data = await response.json();
        setChapters(data);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();
  }, [subjectCode]);

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
        `${mainURL}/api/${subjectCode}/chapter/data`,
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
    <div className="mx-auto mt-8 max-w-4xl rounded-lg bg-slate-100 p-6 shadow-lg">
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

        {/* Subject Code */}
        <div>
          <label className="text-lg mb-2 block font-semibold">
            Subject Code
          </label>
          <input
            type="text"
            value={subjectCode}
            disabled
            className="w-full cursor-not-allowed rounded-md border border-gray-300 p-2 text-gray-500"
          />
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

export default ChapterForm;
