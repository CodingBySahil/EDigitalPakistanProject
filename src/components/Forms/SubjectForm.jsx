import { PropTypes } from "prop-types";
// src/components/SubjectForm.jsx

import { useState } from "react";
import { mainURL } from "../../constants/const";

const SubjectForm = ({ subjectNameFromURL }) => {
  const [subjectName, setSubjectName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Example class options. Modify these based on your actual classes.
  const classOptions = [
    { value: "", label: "Select Class" },
    { value: "class1", label: "Class 1" },
    { value: "class2", label: "Class 2" },
    { value: "class3", label: "Class 3" },
    // Add more classes as needed
  ];

  // API endpoint - Update this to your actual endpoint
  const API = `${mainURL}/api/subject/data`;

  // Handle form submission to post data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a payload object
    const payload = {
      title: subjectName, // Use 'title' instead of 'subjectName'
      class: selectedClass,
      code: subjectCode, // Use 'code' instead of 'subjectCode'
    };

    // Log the payload to check what is being sent
    console.log("Submitting payload:", payload);

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Subject saved successfully!");
        console.log("Response data:", data); // Log the response data

        // Reset form after successful submission
        setSubjectName("");
        setSelectedClass("");
        setSubjectCode("");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "An error occurred."}`);
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Add New Subject
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Subject Name */}
        <div>
          <label
            className="text-lg mb-2 block font-semibold"
            htmlFor="subjectName"
          >
            Subject Name
          </label>
          <input
            type="text"
            id="subjectName"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            placeholder="Enter subject name"
            className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-blue-400"
            required
            name="title"
          />
        </div>

        {/* Class Selection */}
        <div>
          <label
            className="text-lg mb-2 block font-semibold"
            htmlFor="classSelect"
          >
            Class
          </label>
          <select
            id="classSelect"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white p-3 focus:ring-2 focus:ring-blue-400"
            required
            name="class"
          >
            {classOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.value === ""}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Code */}
        <div>
          <label
            className="text-lg mb-2 block font-semibold"
            htmlFor="subjectCode"
          >
            Subject Code
          </label>
          <input
            type="text"
            id="subjectCode"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
            placeholder="Enter subject code"
            className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-blue-400"
            required
            name="code"
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
          {isSubmitting ? "Saving..." : "Save Subject"}
        </button>
      </form>
    </div>
  );
};

// adding prop type validation
SubjectForm.propTypes = {
  subjectNameFromURL: PropTypes.string.isRequired,
};
export default SubjectForm;
