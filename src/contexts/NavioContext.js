"use client"; // Enables client-side rendering for context usage

// React functions for context and state management
import { createContext, useContext, useState } from "react";

// Create Navio context
const NavioContext = createContext();

/**
 * NavioContextProvider Component
 * --------------------------------------------------
 * Purpose:
 * - Stores navigation-related global state for Navio
 * - Shares data between pages (scan → search → route)
 * - Avoids prop drilling across multiple components
 */
export function NavioContextProvider({ children }) {

  /**
   * Global State Variables
   * --------------------------------------------------
   * These values are used across multiple pages/components
   */

  // Stores scanned QR reference point (user's current location)
  const [selectedReferencePoint, setSelectedReferencePoint] = useState(null);

  // Stores manually searched room number
  const [selectedRoom, setSelectedRoom] = useState("");

  // Stores selected saved class (if user chooses from saved list)
  const [selectedSavedClass, setSelectedSavedClass] = useState(null);

  return (
    /**
     * Context Provider
     * --------------------------------------------------
     * Makes navigation state available globally
     */
    <NavioContext.Provider
      value={{

        // Current reference point from QR scan
        selectedReferencePoint,
        setSelectedReferencePoint,

        // Selected room from search
        selectedRoom,
        setSelectedRoom,

        // Selected saved class from saved list
        selectedSavedClass,
        setSelectedSavedClass,
      }}
    >
      {children}
    </NavioContext.Provider>
  );
}

/**
 * useNavio Hook
 * --------------------------------------------------
 * Custom hook to access Navio context easily
 */
export function useNavio() {
  return useContext(NavioContext);
}