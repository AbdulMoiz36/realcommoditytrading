import React, { useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PartnerAuthentication = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('user_type');
  const toastDisplayed = useRef(false); // This ensures toast shows only once


  useEffect(() => {
    if (isAuthenticated != 'partner' && !toastDisplayed.current) {
      toast.warning("Please register as Partner");
      toastDisplayed.current = true; // Prevents further toasts from showing
    }
  }, [isAuthenticated]);

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/partner-registration" />
  );
};

export default PartnerAuthentication;
