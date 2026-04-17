// Import Firestore database instance
import { db } from "../app/utils/firebase";

// Import Firestore functions for CRUD operations
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";

/**
 * getBuildings
 * --------------------------------------------------
 * Fetches all building records from Firestore
 */
export async function getBuildings() {

  // Reference to "buildings" collection
  const buildingsRef = collection(db, "buildings");

  // Create query (currently fetching all documents)
  const q = query(buildingsRef);

  // Execute query
  const snapshot = await getDocs(q);

  // Map Firestore documents into usable objects
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/**
 * getRooms
 * --------------------------------------------------
 * Fetches all room records from Firestore
 */
export async function getRooms() {

  // Reference to "rooms" collection
  const roomsRef = collection(db, "rooms");

  // Create query
  const q = query(roomsRef);

  // Execute query
  const snapshot = await getDocs(q);

  // Convert documents into array of objects
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/**
 * getSavedClasses
 * --------------------------------------------------
 * Fetches saved classes for a specific user
 */
export async function getSavedClasses(userId) {

  // Reference to nested collection: users/{userId}/savedClasses
  const classesRef = collection(db, "users", userId, "savedClasses");

  // Create query
  const q = query(classesRef);

  // Execute query
  const snapshot = await getDocs(q);

  // Map results into usable objects
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/**
 * addSavedClass
 * --------------------------------------------------
 * Adds a new saved class for a specific user
 */
export async function addSavedClass(userId, classItem) {

  // Reference to user's saved classes collection
  const classesRef = collection(db, "users", userId, "savedClasses");

  // Add new document
  const docRef = await addDoc(classesRef, classItem);

  // Return generated document ID
  return docRef.id;
}

/**
 * deleteSavedClass
 * --------------------------------------------------
 * Deletes a saved class by ID
 */
export async function deleteSavedClass(userId, classId) {

  // Reference to specific class document
  const classRef = doc(db, "users", userId, "savedClasses", classId);

  // Delete document
  await deleteDoc(classRef);
}

/**
 * findRoomByNumber
 * --------------------------------------------------
 * Finds a room by its room number
 * - Cleans input
 * - Matches with Firestore data
 */
export async function findRoomByNumber(roomNumber) {

  // Fetch all rooms
  const rooms = await getRooms();

  // Clean input (trim + uppercase)
  const cleanedRoomNumber = roomNumber.trim().toUpperCase();

  // Find matching room
  const matchedRoom = rooms.find(
    (room) => room.roomNumber?.trim().toUpperCase() === cleanedRoomNumber
  );

  // Return result or null if not found
  return matchedRoom || null;
}

/**
 * findRoomByBuildingAndNumber
 * --------------------------------------------------
 * Finds a room using both building and room number
 * - Cleans inputs
 * - Matches building + room combination
 */
export async function findRoomByBuildingAndNumber(building, roomNumber) {

  // Fetch all rooms
  const rooms = await getRooms();

  // Clean inputs
  const cleanedBuilding = building.trim().toLowerCase();
  const cleanedRoomNumber = roomNumber.trim().toUpperCase();

  // Find matching room with both conditions
  const matchedRoom = rooms.find(
    (room) =>
      room.building?.trim().toLowerCase() === cleanedBuilding &&
      room.roomNumber?.trim().toUpperCase() === cleanedRoomNumber
  );

  // Return result or null
  return matchedRoom || null;
}