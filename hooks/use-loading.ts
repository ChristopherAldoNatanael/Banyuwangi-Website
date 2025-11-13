"use client";

import { useState, useEffect } from "react";

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Always show loading screen when the app first loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Show loading for 3.5 seconds

    return () => clearTimeout(timer);
  }, []);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    handleLoadingComplete,
  };
}
