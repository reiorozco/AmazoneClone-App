import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../../firebase";

function ProtectedRoute({ children }) {
  const [user, loading, error] = useAuthState(auth);

  const basket = useSelector((state) => state.basket.list);

  if (loading)
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );

  if (error)
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );

  if (!user) return <Navigate to="/login" replace />;

  if (user && basket.length === 0) return <Navigate to="/checkout" replace />;

  return children;
}

export default ProtectedRoute;
