// src/pages/SendDataPage.jsx
import React from "react";
import ContentForm from "../components/Forms/ContentForm";
import ChapterForm from "../components/Forms/ChapterForm";
import MCQsForm from "../components/Forms/MCQsForm";
import SubjectForm from "../components/Forms/SubjectForm";
import WordMeaningForm from "../components/Forms/WordMeaningForm";
import BookList from "../components/Forms/BookList";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import QuestionAnswerForm from "../components/Forms/QuestionAnswerForm";
import FillInTheBlanksForm from "../components/Forms/FillInTheBlanksForm";

const SendDataPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="p-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleLogoutClick}
          className="py-2 px-4 bg-red-500 text-white bg-[#4abd86] rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <ContentForm />
      <ChapterForm />
      <MCQsForm />
      <SubjectForm />
      <WordMeaningForm />
      <QuestionAnswerForm />
      <FillInTheBlanksForm/>
      <BookList />
    </div>
  );
};

SendDataPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default SendDataPage;
