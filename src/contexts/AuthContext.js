"use client"; // Enables client-side rendering (required for Firebase auth)

// React functions for context creation and state management
import { createContext, useContext, useEffect, useState } from "react";

// Firebase authentication providers and methods
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Import initialized Firebase auth instance
import { auth } from "../app/utils/firebase";

// Create authentication context
const AuthContext = createContext();

/**
 * AuthContextProvider Component
 * --------------------------------------------------
 * Purpose:
 * - Provides authentication state and methods globally
 * - Handles login (Google, GitHub)
 * - Handles logout
 * - Tracks user session using Firebase
 */
export function AuthContextProvider({ children }) {

  // State to store current authenticated user
  const [user, setUser] = useState(null);

  /**
   * GitHub Sign-In
   * --------------------------------------------------
   * Uses Firebase GitHub provider to authenticate user
   */
  const gitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    return await signInWithPopup(auth, provider);
  };

  /**
   * Google Sign-In
   * --------------------------------------------------
   * Uses Firebase Google provider to authenticate user
   */
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
  };

  /**
   * Logout Function
   * --------------------------------------------------
   * Signs out the currently authenticated user
   */
  const firebaseSignOut = async () => {
    return await signOut(auth);
  };

  /**
   * useEffect: Track Authentication State
   * --------------------------------------------------
   * - Listens for login/logout changes
   * - Updates user state automatically
   * - Runs once when component mounts
   */
  useEffect(() => {

    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update state with current user
    });

    // Cleanup subscription when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    /**
     * Context Provider
     * --------------------------------------------------
     * Makes user and auth functions available globally
     */
    <AuthContext.Provider
      value={{ user, gitHubSignIn, googleSignIn, firebaseSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * useUserAuth Hook
 * --------------------------------------------------
 * Custom hook to access authentication context easily
 */
export function useUserAuth() {
  return useContext(AuthContext);
}