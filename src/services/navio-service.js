import { db } from "../app/utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";

export async function getBuildings() {
  const buildingsRef = collection(db, "buildings");
  const q = query(buildingsRef);
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getRooms() {
  const roomsRef = collection(db, "rooms");
  const q = query(roomsRef);
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getSavedClasses(userId) {
  const classesRef = collection(db, "users", userId, "savedClasses");
  const q = query(classesRef);
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function addSavedClass(userId, classItem) {
  const classesRef = collection(db, "users", userId, "savedClasses");
  const docRef = await addDoc(classesRef, classItem);
  return docRef.id;
}

export async function deleteSavedClass(userId, classId) {
  const classRef = doc(db, "users", userId, "savedClasses", classId);
  await deleteDoc(classRef);
}

export async function findRoomByNumber(roomNumber) {
  const rooms = await getRooms();

  const cleanedRoomNumber = roomNumber.trim().toUpperCase();

  const matchedRoom = rooms.find(
    (room) => room.roomNumber?.trim().toUpperCase() === cleanedRoomNumber
  );

  return matchedRoom || null;
}

export async function findRoomByBuildingAndNumber(building, roomNumber) {
  const rooms = await getRooms();

  const cleanedBuilding = building.trim().toLowerCase();
  const cleanedRoomNumber = roomNumber.trim().toUpperCase();

  const matchedRoom = rooms.find(
    (room) =>
      room.building?.trim().toLowerCase() === cleanedBuilding &&
      room.roomNumber?.trim().toUpperCase() === cleanedRoomNumber
  );

  return matchedRoom || null;
}