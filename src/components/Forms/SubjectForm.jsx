// src/components/SubjectForm.jsx

import React, { useState } from "react";

const SubjectForm = () => {
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
  const API = "http://192.168.1.13:3000/api/subject/data";

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
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add New Subject
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Subject Name */}
        <div>
          <label
            className="block font-semibold text-lg mb-2"
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
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            required
            name="title"
          />
        </div>

        {/* Class Selection */}
        <div>
          <label
            className="block font-semibold text-lg mb-2"
            htmlFor="classSelect"
          >
            Class
          </label>
          <select
            id="classSelect"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-400"
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
            className="block font-semibold text-lg mb-2"
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
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            required
            name="code"
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
          {isSubmitting ? "Saving..." : "Save Subject"}
        </button>
      </form>
    </div>
  );
};

export default SubjectForm;
