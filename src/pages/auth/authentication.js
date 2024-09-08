import React, { useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('userId');
  const toastDisplayed = useRef(false); // This ensures toast shows only once

  useEffect(() => {
    if (!isAuthenticated && !toastDisplayed.current) {
      toast.warning("Please login");
      toastDisplayed.current = true; // Prevents further toasts from showing
    }
  }, [isAuthenticated]);

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ message: 'Please login first' }} />
  );
};

export default ProtectedRoute;
