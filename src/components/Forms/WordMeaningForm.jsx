import React, { useState, useEffect } from "react";
import { mainURL } from "../../constants/const";

const WordMeaningForm = () => {
  const [chapterCode, setChapterCode] = useState("");
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [availableChapters, setAvailableChapters] = useState([]);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const chapters = [
          { code: "ENG101CH1", name: "Hazrat Muhammad (S.A.w) The Rasool Of Mercy" },
          { code: "ENG101CH2", name: "New Boy in Class" },
          { code: "ENG101CH3", name: "A Nation's Strength" },
        ];
        setAvailableChapters(chapters);
      } catch (err) {
        console.error("Failed to fetch chapters:", err);
        setError("Failed to load chapters. Please try again later.");
      }
    };
    fetchChapters();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    if (!word.trim() || !meaning.trim()) {
      setError("Please fill out both word and meaning fields.");
      setIsSubmitting(false);
      return;
    }

    const formData = {
      chapterCode,
      word,
      meaning,
    };

    try {
      const response = await fetch(`${mainURL}/api/${subjectCode}CH${chapterNumber}/wordMeaning/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }

      const data = await response.json();
      console.log("Success:", data);

      setWord("");
      setMeaning("");
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
        Add New Word
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Word saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold text-lg mb-2">Chapter Code</label>
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

        <div className="border p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Word</h3>
          <div className="mb-4">
            <label className="block font-medium mb-1">Word</label>
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Enter word"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Meaning</label>
            <textarea
              value={meaning}
              onChange={(e) => setMeaning(e.target.value)}
              placeholder="Enter meaning"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              rows="3"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className={`w-full py-3 text-lg bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Word"}
        </button>
      </form>
    </div>
  );
};

export default WordMeaningForm;
