import { useState, useEffect } from "react";

export const useScreenSize = () => {
  // Define breakpoints
  const breakpoints = {
    mobile: "(max-width: 767px)",
    tablet: "(min-width: 768px) and (max-width: 1024px)",
    desktop: "(min-width: 1025px)",
  };

  // Initial state based on the current screen size
  const getScreenSize = () => {
    if (window.matchMedia(breakpoints.mobile).matches) return "mobile";
    if (window.matchMedia(breakpoints.tablet).matches) return "tablet";
    return "desktop";
  };

  const [screenSize, setScreenSize] = useState(getScreenSize);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
