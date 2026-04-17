"use client"; // Enables client-side rendering (needed for form interactions)

// React hook for managing component state
import { useState } from "react";

/**
 * RoomSearchForm Component
 * --------------------------------------------------
 * Purpose:
 * - Allows user to input a room number
 * - Cleans and formats input
 * - Sends value to parent component via callback
 */
export default function RoomSearchForm({ onSearchRoom }) {

  // State to store user input for room number
  const [roomNumber, setRoomNumber] = useState("");

  /**
   * handleSubmit
   * --------------------------------------------------
   * Triggered when form is submitted
   * - Prevents default form reload
   * - Cleans input (trim + uppercase)
   * - Validates input
   * - Sends value to parent component
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Clean input: remove spaces and convert to uppercase
    const cleanedRoom = roomNumber.trim().toUpperCase();

    // Prevent empty submission
    if (!cleanedRoom) return;

    // Send cleaned room value to parent
    onSearchRoom(cleanedRoom);
  };

  return (
    // Container for centering form on page
    <div className="mx-auto w-full max-w-xl">

      {/* Main Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B] sm:p-8"
      >
        
        {/* HEADER SECTION */}
        {/* Displays title and instructions */}
        <div>
          
          {/* Tag */}
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#0B5FFF] dark:bg-blue-500/10 dark:text-blue-300">
            SEARCH
          </span>

          {/* Title */}
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Search Room Number
          </h2>

          {/* Instructions */}
          <p className="mt-2 text-sm leading-6 text-[#475569] dark:text-slate-300">
            Enter a classroom code exactly as it is stored in Firebase, such as
            <span className="font-semibold text-[#0B5FFF] dark:text-blue-300"> MB 202</span>.
          </p>
        </div>

        {/* INPUT SECTION */}
        <div className="space-y-2">

          {/* Label for accessibility */}
          <label
            htmlFor="roomNumber"
            className="block text-sm font-semibold text-[#0F172A] dark:text-white"
          >
            Room Number
          </label>

          {/* Input wrapper with focus styling */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-2 shadow-sm transition focus-within:border-[#0B5FFF] focus-within:shadow-[0_0_0_4px_rgba(11,95,255,0.08)] dark:border-[#334155] dark:bg-[#0F172A]">
            
            {/* Text Input */}
            <input
              id="roomNumber"
              name="roomNumber"
              type="text"

              // Controlled input value
              value={roomNumber}

              // Update state on typing
              onChange={(e) => setRoomNumber(e.target.value)}

              required // HTML validation

              placeholder="MB 202"

              className="h-12 w-full rounded-xl bg-transparent px-3 text-base font-medium text-[#0F172A] outline-none placeholder:text-[#94A3B8] dark:text-white dark:placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* ACTION SECTION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-[#0B5FFF] px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:opacity-90"
          >
            Search Room
          </button>

          {/* Tip Box */}
          <div className="w-full rounded-2xl border border-red-100 bg-red-50/70 px-4 py-3 text-sm text-[#475569] dark:border-red-400/20 dark:bg-red-500/10 dark:text-slate-300">
            Tip: keep spaces exactly like the stored value.
          </div>
        </div>
      </form>
    </div>
  );
}