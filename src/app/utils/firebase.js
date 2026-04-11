import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADOdv7ItYjNPK6YOJwbzER6nboMrEup5w",
  authDomain: "navio-32267.firebaseapp.com",
  projectId: "navio-32267",
  storageBucket: "navio-32267.firebasestorage.app",
  messagingSenderId: "774859149254",
  appId: "1:774859149254:web:27273e42bb5b1a0e59ecc7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

