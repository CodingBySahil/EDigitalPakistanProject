import { PropTypes } from 'prop-types';
import { useState, useEffect } from "react";
import { mainURL } from "../../constants/const";

const MCQForm = ({ subjectNameFromURL }) => {
  const [chapCode, setChapCode] = useState("");
  const [mcqs, setMcqs] = useState([
    { question: "", options: ["", "", "", ""], correctOption: "" },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null); // To handle errors
  const [success, setSuccess] = useState(false); // To handle success message
  const [chapters, setChapters] = useState([]); // For chapter codes dropdown

  // Fetch chapters from API when component mounts
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(`${mainURL}/api/${subjectNameFromURL}/chapter/data`);
        const data = await response.json();
        // console.log("Chapters fetched for mcqs form:", data); // Log the response
        setChapters(data); // Set chapters in state
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();
  }, [subjectNameFromURL]);

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
        `${mainURL}/api/${chapCode}/exercise/data`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Include any other headers you need, such as Authorization
          },
          body: JSON.stringify(formData),
        }
      );

      // Handle unexpected response content type
      const contentType = response.headers.get("content-type");
      if (!response.ok) {
        const errorData = contentType.includes("application/json")
          ? await response.json()
          : { message: "Unexpected response from server" };
        throw new Error(errorData.message || "Something went wrong!");
      }

      const data = contentType.includes("application/json")
        ? await response.json()
        : { message: "MCQs saved successfully!" };
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
            {chapters.map((chapter) => (
              <option key={chapter.chapterCode} value={chapter.chapterCode}>
                {chapter.chapterCode} - {chapter.name}
              </option>
            ))}
          </select>
        </div>

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
                  Select correct option
                </option>
                {mcq.options.map((_, optIndex) => (
                  <option key={optIndex} value={optIndex + 1}>
                    Option {optIndex + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addMCQ}
          className="text-blue-600 hover:text-blue-800 font-semibold mt-2"
        >
          + Add Another MCQ
        </button>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};


// adding props type validation
MCQForm.propTypes = {
  subjectNameFromURL: PropTypes.string.isRequired,
};
export default MCQForm;
