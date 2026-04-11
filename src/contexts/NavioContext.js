"use client";

import { createContext, useContext, useState } from "react";

const NavioContext = createContext();

export function NavioContextProvider({ children }) {
  const [selectedReferencePoint, setSelectedReferencePoint] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedSavedClass, setSelectedSavedClass] = useState(null);

  return (
    <NavioContext.Provider
      value={{
        selectedReferencePoint,
        setSelectedReferencePoint,
        selectedRoom,
        setSelectedRoom,
        selectedSavedClass,
        setSelectedSavedClass,
      }}
    >
      {children}
    </NavioContext.Provider>
  );
}

export function useNavio() {
  return useContext(NavioContext);
}