// Import Firebase core and required services
import { initializeApp } from "firebase/app"; // Initializes Firebase app
import { getAuth } from "firebase/auth"; // Firebase Authentication service
import { getFirestore } from "firebase/firestore"; // Firestore database service

/**
 * Firebase Configuration Object
 * --------------------------------------------------
 * Contains project-specific credentials required to connect
 * the application to Firebase services.
 * 
 * NOTE:
 * - These values are provided by Firebase console and stored in variables
 *  in .env.local file and the values are used here through the variables 
 *  declared in .env.local file
 * - Used to identify and authenticate your app with Firebase backend
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/**
 * Initialize Firebase App
 * --------------------------------------------------
 * Creates a connection between the frontend application
 * and Firebase services using the configuration above.
 */
const app = initializeApp(firebaseConfig);

/**
 * Firebase Authentication Instance
 * --------------------------------------------------
 * Used for:
 * - User login/signup (Google, GitHub, etc.)
 * - Managing user sessions
 * - Logging users out
 */
export const auth = getAuth(app);

/**
 * Firestore Database Instance
 * --------------------------------------------------
 * Used for:
 * - Storing application data (rooms, saved classes, etc.)
 * - Reading and writing data in real-time
 * - Backend operations for Navio features
 */
export const db = getFirestore(app);