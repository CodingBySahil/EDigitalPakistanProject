import React, { useState, useEffect } from "react";
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
        const response = await fetch(`${mainURL}/api/${subjectNameFromURL}/chapter/data`);
        const data = await response.json();
        console.log("Chapters fetched:", data); 
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
        }
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
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add New Chapter
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Chapter saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Chapter Name */}
        <div>
          <label className="block font-semibold text-lg mb-2">
            Chapter Name
          </label>
          <input
            type="text"
            value={chapName}
            onChange={(e) => setChapName(e.target.value)}
            placeholder="Enter chapter name"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Class Name */}
        <div>
          <label className="block font-semibold text-lg mb-2">Class</label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Enter class"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Dropdown for selecting subject code */}
        <div className="mb-6">
          <label className="block font-semibold text-lg mb-2">Subject code</label>
          <select
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}  
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-lg transition duration-200 ease-in-out transform hover:scale-[1.01] hover:shadow-md"
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
          <label className="block font-semibold text-lg mb-2">
            Chapter Code
          </label>
          <input
            type="text"
            value={chapterCode}
            onChange={(e) => setChapterCode(e.target.value)}
            placeholder="Enter chapter code"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 text-lg bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Chapter"}
        </button>
      </form>
    </div>
  );
};

export default ChapterForm;
