import React, { useState, useEffect } from "react";
import { mainURL } from "../../constants/const";

const MCQForm = ({subjectNameFromURL}) => {
  const [chapCode, setChapCode] = useState("");
  const [mcqs, setMcqs] = useState([
    { question: "", options: ["", "", "", ""], correctOption: "" },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null); // To handle errors
  const [success, setSuccess] = useState(false); // To handle success message
  const [availableChapters, setAvailableChapters] = useState([]); // For chapter codes dropdown

  // Fetch available chapters (you can replace this with your actual API call)
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        // Example static chapters; replace with API call if needed
        const chapters = [
          { code: "CHP001", name: "Introduction to Literature" },
          { code: "CHP002", name: "Poetry and Prose" },
          { code: "CHP003", name: "Drama and Plays" },
          // Add more chapters as needed
        ];
        setAvailableChapters(chapters);
      } catch (err) {
        console.error("Failed to fetch chapters:", err);
        setError("Failed to load chapters. Please try again later.");
      }
    };

    fetchChapters();
  }, []);

  // Handle changes in individual MCQ fields
  const handleMCQChange = (index, field, value) => {
    const updatedMcqs = mcqs.map((mcq, mcqIndex) => {
      if (mcqIndex === index) {
        if (field.startsWith("option")) {
          const optionIndex = parseInt(field.replace("option", "")) - 1;
          const updatedOptions = [...mcq.options];
          updatedOptions[optionIndex] = value;
          return { ...mcq, options: updatedOptions };
        } else {
          return { ...mcq, [field]: value };
        }
      }
      return mcq;
    });
    setMcqs(updatedMcqs);
  };

  // Add a new empty MCQ
  const addMCQ = () => {
    setMcqs([
      ...mcqs,
      { question: "", options: ["", "", "", ""], correctOption: "" },
    ]);
  };

  // Remove an MCQ by index
  const removeMCQ = (index) => {
    if (mcqs.length === 1) return; // Ensure at least one MCQ remains
    const updatedMcqs = mcqs.filter((_, mcqIndex) => mcqIndex !== index);
    setMcqs(updatedMcqs);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    // Validation: Ensure chapter code is selected
    if (!chapCode) {
      setError("Please select a chapter code.");
      setIsSubmitting(false);
      return;
    }

    // Validation: Ensure all MCQs are filled correctly
    for (let i = 0; i < mcqs.length; i++) {
      const mcq = mcqs[i];
      if (!mcq.question.trim()) {
        setError(`Please enter the question for MCQ ${i + 1}.`);
        setIsSubmitting(false);
        return;
      }
      for (let j = 0; j < mcq.options.length; j++) {
        if (!mcq.options[j].trim()) {
          setError(`Please enter option ${j + 1} for MCQ ${i + 1}.`);
          setIsSubmitting(false);
          return;
        }
      }
      if (!mcq.correctOption) {
        setError(`Please select the correct option for MCQ ${i + 1}.`);
        setIsSubmitting(false);
        return;
      }
    }

    // Prepare form data
    const formData = {
      chapCode,
      mcqs, // Array of MCQs
    };

    try {
      const response = await fetch(
        `${mainURL}/api/mcqs/batch`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Include any other headers you need, such as Authorization
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }

      // Optionally, you can handle the response data
      const data = await response.json();
      console.log("Success:", data);

      // Reset form after successful submission
      setChapCode("");
      setMcqs([{ question: "", options: ["", "", "", ""], correctOption: "" }]);
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
        Add Multiple MCQs
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          MCQs saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Chapter Code Dropdown */}
        <div>
          <label className="block font-semibold text-lg mb-2">
            Chapter Code (ChapCode)
          </label>
          <select
            value={chapCode}
            onChange={(e) => setChapCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>
              Select chapter code
            </option>
            {availableChapters.map((chapter) => (
              <option key={chapter.code} value={chapter.code}>
                {chapter.code} - {chapter.name}
              </option>
            ))}
          </select>
        </div>

        {/* Multiple MCQs */}
        {mcqs.map((mcq, index) => (
          <div key={index} className="border p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">MCQ {index + 1}</h3>
              {mcqs.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeMCQ(index)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Question Input */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Question</label>
              <input
                type="text"
                value={mcq.question}
                onChange={(e) =>
                  handleMCQChange(index, "question", e.target.value)
                }
                placeholder="Enter your question"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Options Inputs */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Options</label>
              <div className="space-y-2">
                {mcq.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex items-center">
                    <span className="w-20">Option {optIndex + 1}:</span>
                    <input
                      type="text"
                      value={option}
                      onChange={(e) =>
                        handleMCQChange(
                          index,
                          `option${optIndex + 1}`,
                          e.target.value
                        )
                      }
                      placeholder={`Enter option ${optIndex + 1}`}
                      className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Correct Option Selector */}
            <div>
              <label className="block font-medium mb-1">Correct Option</label>
              <select
                value={mcq.correctOption}
                onChange={(e) =>
                  handleMCQChange(index, "correctOption", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="" disabled>
                  Select the correct option
                </option>
                {mcq.options.map((option, optIndex) => (
                  <option key={optIndex} value={`option${optIndex + 1}`}>
                    Option {optIndex + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}

        {/* Add MCQ Button */}
        <div>
          <button
            type="button"
            onClick={addMCQ}
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all duration-200 ease-in-out"
          >
            Add Another MCQ
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 text-lg bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Submit MCQs"}
        </button>
      </form>
    </div>
  );
};

export default MCQForm;
