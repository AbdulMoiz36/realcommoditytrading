import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation for route handling
import Lenis from '@studio-freight/lenis';

export const useLenis = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Check if the current path is the member registration page
    if (location.pathname === '/member-registration' || location.pathname === '/partner-registration') {
      return; // Skip Lenis initialization on this page
    }

    const lenis = new Lenis({
      duration: 1, // controls the speed of the scroll (1 is the default)
      smooth: true,  // enable smooth scrolling
    });

    // Request animation frame to continuously update Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy(); // Ensure Lenis is destroyed on unmount
    };
  }, [location.pathname]); // Run effect when the path changes
};
