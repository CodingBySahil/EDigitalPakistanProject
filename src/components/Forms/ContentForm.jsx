import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { mainURL } from "../../constants/const";

const ContentForm = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = `<img src="${reader.result}" alt="Uploaded Image" style="max-width: 100%;"/>`;
        setText(text + img);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const vid = `<video controls style="max-width: 100%;"><source src="${reader.result}" type="video/mp4"/>Your browser does not support the video tag.</video>`;
        setText(text + vid);
      };
      reader.readAsDataURL(file);
    }
  };

 
  const API = `${mainURL}/api/ENG101CH1/content/data`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("text", text);
    if (image) {
      formData.append("image", image);
    }
    if (video) {
      formData.append("video", video);
    }

    try {
      const response = await fetch(API, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Book saved successfully via API!");
        setText("");
        setImage(null);
        setVideo(null);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "An error occurred."}`);
      }
    } catch (error) {
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add New Content
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Content Input */}
        <div>
          <label className="block font-semibold text-lg mb-2">Content</label>
          <ReactQuill
            value={text}
            onChange={setText}
            className="bg-white rounded-md"
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["link", "image", "video"],
                ["clean"], // remove formatting button
              ],
            }}
            placeholder="Write your content here..."
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold text-lg mb-2">
            Image Upload
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded"
              className="mt-4 w-32 rounded-md shadow-sm"
            />
          )}
        </div>

        {/* Video Upload */}
        <div>
          <label className="block font-semibold text-lg mb-2">
            Video Upload
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          />
          {video && (
            <video controls className="mt-4 w-full rounded-md shadow-sm">
              <source src={URL.createObjectURL(video)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
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
    </div>
  );
};

export default ContentForm;
