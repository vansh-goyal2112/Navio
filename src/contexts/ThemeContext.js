"use client"; // Enables client-side rendering (needed for localStorage + DOM access)

// React functions for context, state, and lifecycle
import { createContext, useContext, useEffect, useState } from "react";

// Create Theme context
const ThemeContext = createContext();

/**
 * ThemeContextProvider Component
 * --------------------------------------------------
 * Purpose:
 * - Manages dark/light mode globally
 * - Persists theme preference using localStorage
 * - Applies Tailwind "dark" class to HTML root
 */
export function ThemeContextProvider({ children }) {

  // State to track current theme mode
  const [darkMode, setDarkMode] = useState(false);

  /**
   * useEffect: Load saved theme on mount
   * --------------------------------------------------
   * - Reads theme from localStorage
   * - Applies theme to document root
   */
  useEffect(() => {
  const savedTheme = localStorage.getItem("navio-theme");

  if (savedTheme === "dark") {
    setDarkMode(true);
    document.documentElement.classList.add("dark");
  } else if (savedTheme === "light") {
    setDarkMode(false);
    document.documentElement.classList.remove("dark");
  } else {
    // No saved preference — check if dark class already on html
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }
}, []);

  /**
   * toggleDarkMode
   * --------------------------------------------------
   * Toggles between light and dark mode
   * - Updates state
   * - Updates DOM class
   * - Saves preference in localStorage
   */
  const toggleDarkMode = () => {

    // Toggle mode
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      // Enable dark mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("navio-theme", "dark");
    } else {
      // Enable light mode
      document.documentElement.classList.remove("dark");
      localStorage.setItem("navio-theme", "light");
    }
  };

  return (
    /**
     * Context Provider
     * --------------------------------------------------
     * Makes theme state and toggle function available globally
     */
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme Hook
 * --------------------------------------------------
 * Custom hook to access theme context easily
 */
export function useTheme() {
  return useContext(ThemeContext);
}