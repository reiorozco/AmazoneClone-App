import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import PropTypes from "prop-types";

import { auth } from "../../../firebase";

function ProtectedRoute({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  const basket = useSelector((state) => state.basket.list);

  const flexGrow = {
    display: "flex",
    flexGrow: 1,
  };

  if (loading)
    return (
      <div style={flexGrow}>
        <p>Initialising User...</p>
      </div>
    );

  if (error)
    return (
      <div style={flexGrow}>
        <p>Error: {error}</p>
      </div>
    );

  if (!user) return <Navigate to="/login" replace />;

  if (location.pathname === "/orders") return children;

  if (user && basket.length === 0) return <Navigate to="/checkout" replace />;

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};

export default ProtectedRoute;
