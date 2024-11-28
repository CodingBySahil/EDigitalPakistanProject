// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? <Navigate to="/login" replace /> : children;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
