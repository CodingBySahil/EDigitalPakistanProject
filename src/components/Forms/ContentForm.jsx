import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
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
  const [image, setImage] = useState(null); // New state for storing uploaded image

  // Fetch chapters from API when component mounts
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(
          `${mainURL}/api/${subjectNameFromURL}/chapter/data`,
        );
        const data = await response.json();
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
    if (image) {
      formData.append("image", image); // Append image to FormData
    }

    try {
      const response = await fetch(API, {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      if (response.ok) {
        alert("Book saved successfully via API!");
        setText("");
        setSubjectName("");
        setImage(null); // Reset the image state
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
    <div className="mx-auto mt-8 max-w-4xl rounded-lg bg-slate-100 p-6 shadow-lg sm:w-full">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Add New Content
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Dropdown for selecting chapter number */}
        <div className="mb-6">
          <label className="text-lg mb-2 block font-semibold">Chapter</label>
          <select
            value={subjectName}
            onChange={handleChapterChange}
            className="w-full transform rounded-lg border border-gray-300 bg-white p-3 shadow-lg transition duration-200 ease-in-out hover:scale-[1.01] hover:shadow-md focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500"
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
          <label className="text-lg mb-2 block font-semibold">Content</label>
          <ReactQuill
            value={text}
            onChange={setText}
            className="rounded-md bg-white"
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
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </div>

        {/* Image Upload */}
        <div>
          <label className="text-lg mb-2 block font-semibold">
            Upload Image
          </label>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full transform rounded-lg border border-gray-300 bg-white p-3 shadow-lg transition duration-200 ease-in-out hover:scale-[1.01] hover:shadow-md focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500"
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
          {isSubmitting ? "Saving..." : "Save Content"}
        </button>
      </form>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Confirm Submission</h3>
            <p className="mb-4">Are you sure you want to submit the data to?</p>
            <p className="mb-2">
              <strong>Subject :</strong> {subjectName}
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="cursor-pointer rounded-md bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmit}
                className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-900"
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

// adding prop type validation
ContentForm.propTypes = {
  subjectNameFromURL: PropTypes.string.isRequired,
};
export default ContentForm;
