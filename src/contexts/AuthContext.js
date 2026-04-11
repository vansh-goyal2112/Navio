"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../app/utils/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const gitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    return await signInWithPopup(auth, provider);
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
  };

  const firebaseSignOut = async () => {
    return await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, gitHubSignIn, googleSignIn, firebaseSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(AuthContext);
}