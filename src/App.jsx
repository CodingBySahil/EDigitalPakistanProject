import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  // Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Wrapper from "./pages/Wrapper";
import NotFoundPage from "./pages/NotFoundPage";
import SendDataPage from "./pages/SendDataPage";
import PrivateRoute from "./components/PrivateRoute";
import CourseCalendarPage from "./pages/CourseCalendarPage";
import CourseClassSelection from "./pages/courses/CourseClassSelection";
import ClassDetails from "./pages/courses/ClassDetails";
import CourseCalendar from "./components/courseCalendar/CourseCalendar";
import SubjectSelection from "./components/subjectSelection/SubjectSelection";
import PaymentPage from "./pages/PaymentPage";
import ClassSelectionPage from "./pages/ClassSelectionPage";
import SelectSubjectCourse from "./components/classSubjectSelection/SelectSubjectCourse";
import FAQPage from "./pages/FAQPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

import AboutUsPage from "./pages/AboutUsPage";
import AdminPanel from "./pages/AdminPanel";
import SubjectForm from "./components/Forms/SubjectForm";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    return storedAuth === "true";
  });

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home Page";
        metaDescription = "Welcome to the Home Page.";
        break;
      // Add more cases as needed
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // Function to handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/" element={<Wrapper onLogout={handleLogout} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/class" element={<CourseClassSelection />} />
        <Route path="/class/:classLink" element={<ClassDetails />} />
        {/* about us route */}
        <Route path="aboutus" element={<AboutUsPage />} />

        {/* DIVIDER route to select a class */}
        {/* <Route path="/classSelection" element={<ClassSelectionPage />} />
        <Route
          path="/classSelection/subjectSelection"
          element={<SelectSubjectCourse />}
        /> */}

        {/* DIVIDER routes for course calendar */}
        <Route path="/course-calender" element={<CourseCalendarPage />} />
        <Route
          path="/course-calender/:chapterNumber/quiz"
          element={<CourseCalendar />}
        />

        {/* DIVIDER routes for subject selection page */}
        <Route path="/subjectSelection" element={<SubjectSelection />} />
        <Route path="/admin-panel" element={<AdminPanel onLogout={handleLogout}/>} />
        <Route path="/admin-panel/upload-subjects" element={<SubjectForm onLogout={handleLogout}/>} />

        {/* DIVIDER route for payment */}
        <Route path="/payment" element={<PaymentPage />} />

        {/* Protected Administration Route */}
        <Route
          path="/administration/:subjectCode"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <SendDataPage onLogout={handleLogout} />
            </PrivateRoute>
          }
        />

        {/* Protected Routes */}
      <Route
        path="/classSelection"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <ClassSelectionPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/classSelection/subjectSelection"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <SelectSubjectCourse />
          </PrivateRoute>
        }
      />

        
        {/* FAQ route */}
        <Route path="/faq" element={<FAQPage />} />
        {/* term and condition */}
        <Route path="/terms-condition" element={<TermsAndConditionsPage />} />
        {/* privacy policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        transition:Bounce
        closeOnClick
      />
    </>
  );
}

export default App;
