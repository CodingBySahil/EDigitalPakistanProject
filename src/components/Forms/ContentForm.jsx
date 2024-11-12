import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { mainURL } from "../../constants/const";

const ContentForm = ({ subjectNameFromURL }) => {
  const [text, setText] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [chapters, setChapters] = useState([]); // State to store chapter data
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Fetch chapters from API when component mounts
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(`${mainURL}/api/${subjectNameFromURL}/chapter/data`);
        const data = await response.json();
        console.log("Chapters fetched:", data); // Log the response
        setChapters(data); // Set chapters in state
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();
  }, []);

  const handleChapterChange = (e) => {
    setSubjectName(e.target.value);
  };

  const API = `${mainURL}/api/${subjectName}/content/data`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("Content is required.");
      return;
    }
    if (!subjectName) {
      setError("Please select a chapter.");
      return;
    }
    setError("");
    setShowModal(true); // Show modal to confirm data
  };

  const confirmSubmit = async () => {
    setShowModal(false);
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("text", text);

    console.log("Sending data:", { subjectName, text });

    try {
      const response = await fetch(API, {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      console.log("Response received:", responseData);

      if (response.ok) {
        alert("Book saved successfully via API!");
        setText("");
        setSubjectName("");
      } else {
        alert(`Error: ${responseData.message || "An error occurred."}`);
      }
    } catch (error) {
      alert("An unexpected error occurred. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8 sm:w-full">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add New Content
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Dropdown for selecting chapter number */}
        <div className="mb-6">
          <label className="block font-semibold text-lg mb-2 ">Chapter</label>
          <select
            value={subjectName}
            onChange={handleChapterChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-lg transition duration-200 ease-in-out transform hover:scale-[1.01] hover:shadow-md"
          >
            <option value="" disabled className="text-gray-500">
              Select a chapter
            </option>
            {chapters.map((chapter) => (
              <option key={chapter.chapterCode} value={chapter.chapterCode}>
                {chapter.chapterCode + " - " + chapter.name}
              </option>
            ))}
          </select>
        </div>

        {/* Content Input */}
        <div>
          <label className="block font-semibold text-lg mb-2">Content</label>
          <ReactQuill
            value={text}
            onChange={setText}
            className="bg-white rounded-md"
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ color: [] }, { background: [] }],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["link", "image", "video"],
                ["clean"],
              ],
            }}
            formats={[
              "header",
              "font",
              "size",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "color",
              "background",
              "list",
              "bullet",
              "indent",
              "link",
              "image",
              "video",
            ]}
            placeholder="Write your content here..."
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 text-lg bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Content"}
        </button>
      </form>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Confirm Submission</h3>
            <p className="mb-4">
              Are you sure you want to submit the data to?
            </p>
            <p className="mb-2">
              <strong>Subject :</strong> {subjectName}
            </p>
            {/* <p className="mb-4">
              <strong>Content:</strong> {text || "(No content provided)"}
            </p> */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-900 cursor-pointer"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentForm;
