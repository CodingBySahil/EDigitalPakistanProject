import React, { useState } from "react";

const FillInTheBlanksForm = () => {
  const [answers, setAnswers] = useState(Array(4).fill("")); // Initialize four blanks with empty strings

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., sending answers to an API)
    console.log(answers);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8 space-y-4"
    >
      <div>
        <label className="block">
          Sentence 1: The capital of France is{" "}
          <span className="font-bold">___</span>.
        </label>
        <select
          value={answers[0]}
          onChange={(e) => handleChange(0, e.target.value)}
          className="block mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select an answer</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block">
          Sentence 2: The largest planet in our solar system is{" "}
          <span className="font-bold">___</span>.
        </label>
        <select
          value={answers[1]}
          onChange={(e) => handleChange(1, e.target.value)}
          className="block mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select an answer</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block">
          Sentence 3: The chemical symbol for water is{" "}
          <span className="font-bold">___</span>.
        </label>
        <select
          value={answers[2]}
          onChange={(e) => handleChange(2, e.target.value)}
          className="block mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select an answer</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block">
          Sentence 4: The process by which plants make their food is called{" "}
          <span className="font-bold">___</span>.
        </label>
        <select
          value={answers[3]}
          onChange={(e) => handleChange(3, e.target.value)}
          className="block mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select an answer</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out"
      >
        Submit
      </button>
    </form>
  );
};

export default FillInTheBlanksForm;
