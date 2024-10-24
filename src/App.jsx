// src/App.jsx
import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Wrapper from "./pages/Wrapper";
import NotFoundPage from "./pages/NotFoundPage";
import SendDataPage from "./pages/SendDataPage";
import PrivateRoute from "./components/PrivateRoute";
import CourseCalendarPage from "./pages/CourseCalendarPage";

// font converted to roboto commit 2

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    return storedAuth === "true" ? true : false;
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
        'head > meta[name="description"]'
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
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Wrapper />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/course-calender" element={<CourseCalendarPage />} />

      {/* Protected Administration Route */}
      <Route
        path="/administration"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <SendDataPage onLogout={handleLogout} />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
