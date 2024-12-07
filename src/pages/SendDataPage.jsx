// src/pages/SendDataPage.jsx
import React from "react";
import ContentForm from "../components/Forms/ContentForm";
import ChapterForm from "../components/Forms/ChapterForm";
import MCQsForm from "../components/Forms/MCQsForm";
import SubjectForm from "../components/Forms/SubjectForm";
import WordMeaningForm from "../components/Forms/WordMeaningForm";

import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import QuestionAnswerForm from "../components/Forms/QuestionAnswerForm";
import FillInTheBlanksForm from "../components/Forms/FillInTheBlanksForm";

const SendDataPage = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the subject name from the URL
  const extractSubjectName = () => {
    const pathSegments = location.pathname.split("/");
    return pathSegments[pathSegments.length - 1]; // Gets the last segment
  };

  const subjectNameFromURL = extractSubjectName();

  const handleLogoutClick = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="p-6">
      {/* <div className="mb-4 flex justify-end">
        <button
          onClick={handleLogoutClick}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div> */}

      {/* Display the subject name */}
      {/* <div className="mb-4">
        <h2 className="text-2xl font-semibold">
          Subject: {subjectNameFromURL}
        </h2>
      </div> */}

      {/* Pass subjectNameFromURL as a prop to each component */}
      <ContentForm subjectNameFromURL={subjectNameFromURL} />
      <ChapterForm subjectNameFromURL={subjectNameFromURL} />
      <MCQsForm subjectNameFromURL={subjectNameFromURL} />
      {/* <SubjectForm subjectNameFromURL={subjectNameFromURL} /> */}
      <WordMeaningForm subjectNameFromURL={subjectNameFromURL} />
      <QuestionAnswerForm subjectNameFromURL={subjectNameFromURL} />
      <FillInTheBlanksForm subjectNameFromURL={subjectNameFromURL} />
    </div>
  );
};

SendDataPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default SendDataPage;
