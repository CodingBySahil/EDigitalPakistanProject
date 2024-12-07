import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

const AdminPanel = ({ onLogout }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const navigate = useNavigate();

  const handleFirstLinkClick = () => {
    setIsDialogOpen(true); // Open the dialog box
  };

  const handleProceed = () => {
    if (!selectedClass) {
      alert("Please select a class to proceed.");
    } else {
      setIsDialogOpen(false); // Close the dialog
      navigate(`/subjectSelection?class=${selectedClass}`);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close the dialog box without proceeding
  };

  return (
    <div className="flex h-screen flex-col">
      {/* TopNav */}
      <TopNav className="bg-[#4abd86]" onLogout={onLogout} />

      {/* Main Content */}
      <div className="flex flex-grow flex-col items-center justify-center bg-gray-100 ">
        <div className="flex w-full max-w-md flex-col items-center space-y-6 px-4 mb-28">
          {/* Action Links */}
          <button
            onClick={handleFirstLinkClick}
            className="text-lg w-full rounded-lg bg-[#4abd86] py-3 text-center font-medium text-white shadow-md hover:bg-[#3ca66e] focus:outline-none focus:ring-2 focus:ring-[#4abd86]"
          >
            Upload Chapters and Chapters Data
          </button>
          <Link
            to="/admin-panel/upload-subjects"
            className="text-lg w-full rounded-lg bg-blue-500 py-3 text-center font-medium text-white no-underline shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Upload Subjects
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer className="fixed bottom-0 left-0 right-0 bg-gray-800 py-3 text-white" />

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 space-y-4 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">
              Select a Class
            </h2>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#4abd86] focus:outline-none focus:ring-2 focus:ring-[#4abd86]"
            >
              <option value="" disabled>
                -- Select a Class --
              </option>
              {/* //   adding by loop */}
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  Class {index + 1}
                </option>
              ))}
            </select>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseDialog}
                className="rounded-md bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleProceed}
                className="rounded-md bg-[#4abd86] px-4 py-2 text-white hover:bg-[#3ca66e]"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Props validation
AdminPanel.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AdminPanel;
