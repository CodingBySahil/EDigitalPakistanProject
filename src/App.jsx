import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate,
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
        <Route
          path="/"
          element={
            isAuthenticated ? <Wrapper /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/class" element={<CourseClassSelection />} />
        <Route path="/class/:classLink" element={<ClassDetails />} />

        {/* DIVIDER routes for course calendar */}
        <Route path="/course-calender" element={<CourseCalendarPage />} />
        <Route path="/course-calender/quiz" element={<CourseCalendar />} />

        {/* DIVIDER routes for subject selection page */}
        <Route path="/subjectSelection" element={<SubjectSelection />} />

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
