import React, { useState, useEffect } from "react";
import { mainURL } from "../../constants/const";

const WordMeaningForm = () => {
  const [chapterCode, setChapterCode] = useState("");
  const [words, setWords] = useState([{ word: "", meaning: "" }]);
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
          { code: "ENG101CH1", name: "Hazrat Muhammad (S.A.w) The Rasool Of Mercy" },
          { code: "ENG101CH2", name: "New Boy in Class" },
          { code: "ENG101CH2", name: "A Nation's Strength" },
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

  const handleWordChange = (index, field, value) => {
    const updatedWords = words.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setWords(updatedWords);
  };

  const addWordField = () => {
    setWords([...words, { word: "", meaning: "" }]);
  };

  const removeWordField = (index) => {
    if (words.length === 1) return; // Ensure at least one word field remains
    const updatedWords = words.filter((_, i) => i !== index);
    setWords(updatedWords);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    // Validation: Ensure all words and meanings are filled
    for (let i = 0; i < words.length; i++) {
      if (!words[i].word.trim() || !words[i].meaning.trim()) {
        setError(`Please fill out all fields for word ${i + 1}.`);
        setIsSubmitting(false);
        return;
      }
    }

    // Prepare form data
    const formData = {
      chapterCode,
      words, // Array of { word, meaning }
    };

    try {
      const response = await fetch(
        `${mainURL}/api/word-meanings`,
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
      setChapterCode("");
      setWords([{ word: "", meaning: "" }]);
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
        Add New Words
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Words saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Chapter Code Dropdown */}
        <div>
          <label className="block font-semibold text-lg mb-2">
            Chapter Code
          </label>
          <select
            value={chapterCode}
            onChange={(e) => setChapterCode(e.target.value)}
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

        {/* Words and Meanings */}
        {words.map((entry, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">Word {index + 1}</h3>

            {/* Word Input */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Word</label>
              <input
                type="text"
                value={entry.word}
                onChange={(e) =>
                  handleWordChange(index, "word", e.target.value)
                }
                placeholder="Enter word"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Meaning Input */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Meaning</label>
              <textarea
                value={entry.meaning}
                onChange={(e) =>
                  handleWordChange(index, "meaning", e.target.value)
                }
                placeholder="Enter meaning"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Remove Word Button */}
            <div className="flex justify-end">
              {words.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeWordField(index)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Add Word Button */}
        <div>
          <button
            type="button"
            onClick={addWordField}
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all duration-200 ease-in-out"
          >
            Add Another Word
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
          {isSubmitting ? "Saving..." : "Save Words"}
        </button>
      </form>
    </div>
  );
};

export default WordMeaningForm;
