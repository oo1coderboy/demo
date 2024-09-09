import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      // Show toast notification
      toast.error("Protected route, please log in first!");

      // Redirect to login page after showing the toast
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  // If the user is logged in, render the children
  if (isLoggedIn) {
    return children;
  }

  // Render nothing while redirecting
  return null;
}

export default ProtectedRoute;
