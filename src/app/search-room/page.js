"use client"; // Enables client-side rendering for this Next.js page

// React hooks for managing state
import { useState } from "react";

// Router for navigation between pages
import { useRouter } from "next/navigation";

// Form component to input room number
import RoomSearchForm from "../../components/RoomSearchForm";

// Service function to fetch room data from backend (Firebase/API)
import { findRoomByNumber } from "../../services/navio-service";

// Navio context to store selected room globally
import { useNavio } from "../../contexts/NavioContext";

/**
 * SearchRoomPage Component
 * --------------------------------------------------
 * Purpose:
 * - Allows user to search for a room by room number
 * - Validates room against backend data
 * - Displays success or error states
 * - Prepares selected room for navigation flow
 */
export default function SearchRoomPage() {

  // State to store matched room result
  const [matchedRoom, setMatchedRoom] = useState(null);

  // State to store error messages
  const [error, setError] = useState("");

  // State to store last searched room value
  const [searchedRoom, setSearchedRoom] = useState("");

  // Router for navigation
  const router = useRouter();

  // Context function to store selected room globally
  const { setSelectedRoom } = useNavio();

  /**
   * handleSearchRoom
   * --------------------------------------------------
   * Triggered when user submits the search form
   * - Clears previous states
   * - Calls backend service to validate room
   * - Updates UI based on result
   */
  const handleSearchRoom = async (roomNumber) => {

    // Reset previous states
    setError("");
    setMatchedRoom(null); 
    setSearchedRoom(roomNumber);

    // Fetch room from backend
    const room = await findRoomByNumber(roomNumber);

    // Handle invalid room
    if (!room) {
      setError("Invalid room number. Please enter a valid classroom.");
      return;
    }

    // Store matched room
    setMatchedRoom(room);

    // Save selected room globally for next step
    setSelectedRoom(room.roomNumber);
  };

  /**
   * handleContinue
   * --------------------------------------------------
   * Navigates user to route result page
   * after successful room selection
   */
  const handleContinue = () => {
    router.push("/route-result");
  };

  /**
   * Main UI
   * --------------------------------------------------
   * Sections:
   * 1. Header (instructions)
   * 2. Search form (left)
   * 3. Dynamic result panel (right)
   */
  return (
    <main className="space-y-8">

      {/* HEADER SECTION */}
      {/* Displays page title and instructions */}
      <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
        
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          
          {/* Left: Title + description */}
          <div>
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#0B5FFF] dark:bg-blue-500/10 dark:text-blue-300">
              ROOM SEARCH
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Search Room
            </h1>

            <p className="mt-3 max-w-2xl text-[#475569] dark:text-slate-300">
              Enter a classroom number to validate it against Firebase and prepare
              the next step in the navigation flow.
            </p>
          </div>

          {/* Example format box */}
          <div className="rounded-2xl border border-red-100 bg-red-50/70 px-5 py-4 dark:border-red-400/20 dark:bg-red-500/10">
            <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
              Example format
            </p>
            <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
              Use room values like <span className="font-semibold">MB 202</span>
            </p>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT SIDE: SEARCH FORM */}
        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-4 shadow-lg dark:border-[#334155] dark:bg-[#1E293B] sm:p-6">
          
          {/* Pass search handler to form */}
          <RoomSearchForm onSearchRoom={handleSearchRoom} />
        </div>

        {/* RIGHT SIDE: RESULT / STATUS PANEL */}
        <div className="space-y-6">

          {/* ERROR STATE */}
          {error && (
            <div className="rounded-[28px] border border-red-200 bg-red-50 p-6 shadow-lg dark:border-red-500/20 dark:bg-red-500/10">
              
              {/* Error Header */}
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl shadow-sm dark:bg-[#1E293B]">
                  ⚠️
                </div>
                <div>
                  <p className="text-lg font-bold text-[#E11D48] dark:text-red-300">
                    Room not found
                  </p>
                  <p className="text-sm text-[#475569] dark:text-slate-300">
                    Please check the room number and try again.
                  </p>
                </div>
              </div>

              {/* Error message */}
              <p className="text-sm leading-6 text-red-700 dark:text-red-300">
                {error}
              </p>
            </div>
          )}

          {/* SUCCESS STATE */}
          {matchedRoom && (
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
              
              {/* Success Header */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-500/10">
                  ✅
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Room Found</h2>
                  <p className="text-sm text-[#475569] dark:text-slate-300">
                    Destination is ready for route preparation
                  </p>
                </div>
              </div>

              {/* Room Details */}
              <div className="space-y-4">

                {/* Room Number */}
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    Room Number
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#0F172A] dark:text-white">
                    {matchedRoom.roomNumber}
                  </p>
                </div>

                {/* Building */}
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    Building
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#0F172A] dark:text-white">
                    {matchedRoom.building}
                  </p>
                </div>

                {/* Floor (optional) */}
                {matchedRoom.floor && (
                  <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                    <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                      Floor
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#0F172A] dark:text-white">
                      {matchedRoom.floor}
                    </p>
                  </div>
                )}
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="mt-6 w-full rounded-2xl bg-[#0B5FFF] px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:opacity-90"
              >
                Continue
              </button>
            </div>
          )}

          {/* LOADING / SEARCH SUBMITTED STATE */}
          {!matchedRoom && !error && searchedRoom && (
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
              
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-500/10">
                  🔎
                </div>
                <div>
                  <p className="text-lg font-bold">Search Submitted</p>
                  <p className="text-sm text-[#475569] dark:text-slate-300">
                    Checking Firebase room records
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#475569] dark:text-slate-300">
                Searching for room:{" "}
                <span className="font-semibold text-[#0F172A] dark:text-white">
                  {searchedRoom}
                </span>
              </p>
            </div>
          )}

          {/* DEFAULT STATE */}
          {!matchedRoom && !error && !searchedRoom && (
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
              
              <h2 className="text-xl font-bold tracking-tight">How this works</h2>

              {/* Step-by-step explanation */}
              <div className="mt-5 space-y-4">

                {/* Step 1 */}
                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    1. Enter a room number
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    Search using the same format stored in Firebase.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    2. Validate destination
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    Navio checks whether the classroom exists.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="rounded-2xl border border-red-100 bg-red-50/70 p-4 dark:border-red-400/20 dark:bg-red-500/10">
                  <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                    3. Continue to route flow
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    Once found, the room is ready for navigation preparation.
                  </p>
                </div>

              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}