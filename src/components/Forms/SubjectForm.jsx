import { PropTypes } from "prop-types";
import { useState, useRef } from "react";
import { mainURL } from "../../constants/const";
import TopNav from "../TopNav";
import Footer from "../Footer";

const SubjectForm = () => {
  const [subjectName, setSubjectName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [image, setImage] = useState(null); // State to hold the uploaded image
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null); // Ref for clearing file input

  const classOptions = [
    { value: "", label: "Select Class" },
    {
      value: "1",
      label: (
        <>
          Class 1<sup>st</sup>
        </>
      ),
    },
    {
      value: "2",
      label: (
        <>
          Class 2<sup>nd</sup>
        </>
      ),
    },
    {
      value: "3",
      label: (
        <>
          Class 3<sup>rd</sup>
        </>
      ),
    },
    {
      value: "4",
      label: (
        <>
          Class 4<sup>th</sup>
        </>
      ),
    },
    {
      value: "5",
      label: (
        <>
          Class 5<sup>th</sup>
        </>
      ),
    },
    {
      value: "6",
      label: (
        <>
          Class 6<sup>th</sup>
        </>
      ),
    },
    {
      value: "7",
      label: (
        <>
          Class 7<sup>th</sup>
        </>
      ),
    },
    {
      value: "8",
      label: (
        <>
          Class 8<sup>th</sup>
        </>
      ),
    },
    {
      value: "9",
      label: (
        <>
          Class 9<sup>th</sup>
        </>
      ),
    },
    {
      value: "10",
      label: (
        <>
          Class 10<sup>th</sup>
        </>
      ),
    },
  ];

  const API = `${mainURL}/api/subject/data`;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", subjectName);
    formData.append("class", selectedClass);
    formData.append("code", subjectCode);
    if (image) {
      formData.append("subject", image);
    }

    try {
      const response = await fetch(API, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert("Subject saved successfully!");
        console.log("Response data:", data);

        // Reset the form
        setSubjectName("");
        setSelectedClass("");
        setSubjectCode("");
        setImage(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Clear the file input
        }
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          alert(`Error: ${errorData.message || "An error occurred."}`);
        } else {
          const errorText = await response.text();
          console.error("Server response (not JSON):", errorText);
          alert("Unexpected server response. Please check the server.");
        }
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <TopNav />

      <div className="mx-auto mt-28 max-w-4xl rounded-lg bg-white p-6 shadow-lg">
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

          {/* Image Upload */}
          <div>
            <label
              className="text-lg mb-2 block font-semibold"
              htmlFor="imageUpload"
            >
              Upload Image
            </label>
            <input
              name="subject"
              type="file"
              id="imageUpload"
              onChange={handleImageChange}
              accept="image/*"
              ref={fileInputRef} // Reference for resetting input
              className="w-full rounded-md border border-gray-300 p-3"
            />
            {image && (
              <p className="mt-2 text-green-500">
                Image selected: {image.name}
              </p>
            )}
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

      <Footer />
    </>
  );
};

export default SubjectForm;
