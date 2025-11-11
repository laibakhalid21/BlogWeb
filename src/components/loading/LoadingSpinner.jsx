"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/themecontext";

export const LoadingSpinner = ({ size = "md", className = "" }) => {
  const { mode } = useContext(ThemeContext);
  
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-4 ${
          mode === "light"
            ? "border-gray-200 border-t-teal-600"
            : "border-gray-700 border-t-teal-400"
        } rounded-full animate-spin`}
      />
    </div>
  );
};

export const PageLoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner size="xl" />
    </div>
  );
};

