"use client"; // Enables client-side rendering (needed for form + Firebase calls)

// React hooks for state and lifecycle management
import { useEffect, useState } from "react";

// Service functions to interact with Firestore
import { getBuildings, findRoomByNumber } from "../services/navio-service";

/**
 * SavedClassForm Component
 * --------------------------------------------------
 * Handles:
 * - Fetching buildings from Firebase
 * - Taking user input for class details
 * - Validating room existence
 * - Saving valid class data
 */
export default function SavedClassForm({ onAddClass }) {

  // Initial state for form fields
  const initialState = {
    building: "",
    roomNumber: "",
    day: "",
    time: "",
  };

  // State to store form values
  const [classItem, setClassItem] = useState(initialState);

  // State to store buildings from Firebase
  const [buildings, setBuildings] = useState([]);

  // State to store error messages
  const [error, setError] = useState("");

  // State to show loading while saving
  const [isSaving, setIsSaving] = useState(false);

  /**
   * Load buildings on component mount
   */
  useEffect(() => {
    async function loadBuildings() {

      // Fetch buildings from backend
      const data = await getBuildings();

      // Save buildings to state
      setBuildings(data);

      // Set default building (first item)
      if (data.length > 0) {
        setClassItem((prev) => ({
          ...prev,
          building: data[0].name,
        }));
      }
    }

    loadBuildings();
  }, []);

  /**
   * Handle input changes
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setError(""); // Clear error on input change

    // Update corresponding field
    setClassItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    setError("");
    setIsSaving(true); // Enable loading state

    try {
      // Clean room number input
      const cleanedRoomNumber = classItem.roomNumber.trim().toUpperCase();

      // Validate room using backend
      const matchedRoom = await findRoomByNumber(cleanedRoomNumber);

      // Debug logs
      console.log("Entered room number:", cleanedRoomNumber);
      console.log("Matched room:", matchedRoom);

      // If room does not exist → show error
      if (!matchedRoom) {
        setError("This classroom does not exist in the database.");
        setIsSaving(false);
        return;
      }

      // Prepare new class object
      const newClass = {
        ...classItem,
        roomNumber: cleanedRoomNumber,
      };

      // Send data to parent component
      await onAddClass(newClass);

      // Reset form but keep selected building
      setClassItem((prev) => ({
        ...initialState,
        building: prev.building || "",
      }));

    } catch (err) {

      // Handle unexpected errors
      console.error("Save class validation error:", err);
      setError("Something went wrong while validating the classroom.");

    } finally {

      // Stop loading state
      setIsSaving(false);
    }
  };

  return (
    // Form container
    <div className="mx-auto w-full max-w-xl">

      {/* Main Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B] sm:p-8"
      >

        {/* Header Section */}
        <div>
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#0B5FFF] dark:bg-blue-500/10 dark:text-blue-300">
            SAVE CLASS
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Save New Class
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#475569] dark:text-slate-300">
            Add a classroom destination to your semester list so you can quickly
            return to it later through the Navio flow.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-5">

          {/* Building Dropdown */}
          <div className="space-y-2">
            <label
              htmlFor="building"
              className="block text-sm font-semibold text-[#0F172A] dark:text-white"
            >
              Building
            </label>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-2 shadow-sm transition focus-within:border-[#0B5FFF] focus-within:shadow-[0_0_0_4px_rgba(11,95,255,0.08)] dark:border-[#334155] dark:bg-[#0F172A]">
              <select
                id="building"
                name="building"
                value={classItem.building}
                onChange={handleChange}
                required
                className="h-12 w-full rounded-xl bg-transparent px-3 text-base font-medium text-[#0F172A] outline-none dark:text-white"
              >
                {/* Populate buildings dynamically */}
                {buildings.map((building) => (
                  <option key={building.id} value={building.name}>
                    {building.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Room Input */}
          <div className="space-y-2">
            <label
              htmlFor="roomNumber"
              className="block text-sm font-semibold text-[#0F172A] dark:text-white"
            >
              Room Number
            </label>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-2 shadow-sm transition focus-within:border-[#0B5FFF] focus-within:shadow-[0_0_0_4px_rgba(11,95,255,0.08)] dark:border-[#334155] dark:bg-[#0F172A]">
              <input
                id="roomNumber"
                name="roomNumber"
                type="text"
                value={classItem.roomNumber}
                onChange={handleChange}
                required
                placeholder="MB 202"
                className="h-12 w-full rounded-xl bg-transparent px-3 text-base font-medium text-[#0F172A] outline-none placeholder:text-[#94A3B8] dark:text-white dark:placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Day + Time Inputs */}
          <div className="grid gap-5 sm:grid-cols-2">

            {/* Day Input */}
            <div className="space-y-2">
              <label
                htmlFor="day"
                className="block text-sm font-semibold text-[#0F172A] dark:text-white"
              >
                Day
              </label>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-2 shadow-sm transition focus-within:border-[#0B5FFF] focus-within:shadow-[0_0_0_4px_rgba(11,95,255,0.08)] dark:border-[#334155] dark:bg-[#0F172A]">
                <input
                  id="day"
                  name="day"
                  type="text"
                  value={classItem.day}
                  onChange={handleChange}
                  required
                  placeholder="Monday"
                  className="h-12 w-full rounded-xl bg-transparent px-3 text-base font-medium text-[#0F172A] outline-none placeholder:text-[#94A3B8] dark:text-white dark:placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Time Input */}
            <div className="space-y-2">
              <label
                htmlFor="time"
                className="block text-sm font-semibold text-[#0F172A] dark:text-white"
              >
                Time
              </label>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-2 shadow-sm transition focus-within:border-[#E11D48] focus-within:shadow-[0_0_0_4px_rgba(225,29,72,0.08)] dark:border-[#334155] dark:bg-[#0F172A]">
                <input
                  id="time"
                  name="time"
                  type="text"
                  value={classItem.time}
                  onChange={handleChange}
                  required
                  placeholder="10:00 AM - 11:20 AM"
                  className="h-12 w-full rounded-xl bg-transparent px-3 text-base font-medium text-[#0F172A] outline-none placeholder:text-[#94A3B8] dark:text-white dark:placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-400/20 dark:bg-red-500/10 dark:text-red-300">
            {error}
          </div>
        )}

        {/* Action Section */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSaving}
            className="w-full rounded-2xl bg-[#0B5FFF] px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Checking..." : "Save Class"}
          </button>

          {/* Info Box */}
          <div className="w-full rounded-2xl border border-red-100 bg-red-50/70 px-4 py-3 text-sm text-[#475569] dark:border-red-400/20 dark:bg-red-500/10 dark:text-slate-300">
            Only classrooms that exist in Firebase can be saved.
          </div>
        </div>
      </form>
    </div>
  );
}