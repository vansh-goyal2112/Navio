"use client"; // Enables client-side rendering for this Next.js page

// Import router for programmatic navigation between pages
import { useRouter } from "next/navigation";

// Import Navio context to access global navigation-related state
import { useNavio } from "../../contexts/NavioContext";
import { useState } from "react";
import { mapData } from "@/data/mapData";
import { dijkstra } from "../utils/dijkstra";
import MapCanvas from "@/components/MapCanvas";

/**
 * RouteResultPage Component
 * --------------------------------------------------
 * Purpose:
 * - Displays selected navigation inputs (reference point + destination)
 * - Shows details of selected saved class (if used)
 * - Prepares UI for future pathfinding integration (Neo4j)
 * - Provides navigation options to restart flow
 */
export default function RouteResultPage() {
  const [start] = useState("N0"); // fixed start (your red dot)
  const [end, setEnd] = useState("");
  const [path, setPath] = useState([]);

  // Router used for redirecting user to other pages
  const router = useRouter();

  // Extract navigation-related state from context
  const { selectedReferencePoint, selectedRoom, selectedSavedClass } = useNavio();

  const handleNavigate = () => {
    if (!end) return;

    const result = dijkstra(mapData, start, end);
    setPath(result);
  };


  /**
   * Determine which room to display
   * Priority:
   * 1. Saved class room (if selected)
   * 2. Manually searched room
   * 3. Fallback text if nothing selected
   */
  const displayRoom =
    selectedSavedClass?.roomNumber || selectedRoom || "No room selected";

  /**
   * Main UI
   * --------------------------------------------------
   * Sections:
   * 1. Header (confirmation state)
   * 2. Navigation details (reference + destination)
   * 3. Optional saved class info
   * 4. Action buttons
   * 5. Future integration panel
   */
  return (
    <main className="space-y-8">

      {/* HEADER / HERO SECTION */}
      {/* Indicates system is ready to generate navigation route */}
      <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
        
        {/* Status Tag */}
        <span className="inline-block rounded-full bg-red-50 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#E11D48] dark:bg-red-500/10 dark:text-red-300">
          ROUTE READY
        </span>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Navigation Ready
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-2xl text-[#475569] dark:text-slate-300">
          Your reference point and destination have been identified. The system
          is ready to generate the navigation path.
        </p>
      </section>

      {/* MAIN CONTENT GRID */}
      {/* Left: navigation details | Right: integration info */}
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

        {/* LEFT SIDE: NAVIGATION DETAILS */}
        <div className="space-y-4">

          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            
            <h2 className="mb-4 text-xl font-bold">Navigation Details</h2>

            <div className="space-y-4">

              {/* REFERENCE POINT */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                  Reference Point
                </p>

                {/* Show scanned reference point or fallback */}
                <p className="mt-1 text-lg font-semibold">
                  {selectedReferencePoint
                    ? selectedReferencePoint.info
                    : "Not scanned yet"}
                </p>
              </div>

              {/* DESTINATION ROOM */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                  Destination Room
                </p>

                {/* Display resolved room value */}
                <p className="mt-1 text-lg font-semibold">{displayRoom}</p>
              </div>

              {/* SAVED CLASS DETAILS (Conditional Rendering) */}
              {/* Only shown if user selected a saved class */}
              {selectedSavedClass && (
                <>

                  {/* BUILDING */}
                  <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                    <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                      Building
                    </p>
                    <p className="mt-1 text-lg font-semibold">
                      {selectedSavedClass.building}
                    </p>
                  </div>

                  {/* DAY + TIME GRID */}
                  <div className="grid grid-cols-2 gap-4">

                    {/* DAY */}
                    <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                      <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                        Day
                      </p>
                      <p className="mt-1 font-semibold">
                        {selectedSavedClass.day}
                      </p>
                    </div>

                    {/* TIME */}
                    <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                      <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                        Time
                      </p>
                      <p className="mt-1 font-semibold">
                        {selectedSavedClass.time}
                      </p>
                    </div>

                  </div>
                </>
              )}
            </div>
          </div>

          <div className="space-y-4">

            {/* Card Container */}
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">

              {/* Title */}
              <h2 className="mb-4 text-xl font-bold">
                Indoor Navigation System
              </h2>

              {/* Controls */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                {/* Dropdown */}
                <div className="flex-1 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 dark:border-[#334155] dark:bg-[#0F172A]">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    Destination
                  </p>

                  <select
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    className="mt-2 w-full bg-transparent outline-none text-lg font-semibold"
                  >
                    <option value="">Select Destination</option>
                    <option value="CR1">MB 202</option>
                    <option value="CR2">MB 207</option>
                    <option value="CR3">MB 208</option>
                  </select>
                </div>

                {/* Button */}
                <button
                  onClick={handleNavigate}
                  className="rounded-2xl bg-[#0B5FFF] px-6 py-3 font-semibold text-white shadow-md transition hover:opacity-90 active:scale-95"
                >
                  Navigate
                </button>
              </div>
            </div>

            {/* Map Card */}
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-4 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">

              <p className="mb-3 text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                Map View
              </p>

              <MapCanvas
                nodes={mapData.nodes}
                edges={mapData.edges}
                path={path}
              />
            </div>

          </div>
          {/* ACTION BUTTONS */}
          {/* Allows user to restart navigation flow */}
          <div className="grid gap-3 sm:grid-cols-2">

            {/* Redirect to scan page */}
            <button
              onClick={() => router.push("/scan")}
              className="rounded-xl bg-[#0B5FFF] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Scan Again
            </button>

            {/* Redirect to search page */}
            <button
              onClick={() => router.push("/search-room")}
              className="rounded-xl bg-[#E11D48] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Search Another Room
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: FUTURE INTEGRATION PANEL */}
        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
          
          <h2 className="text-xl font-bold">Next Step</h2>

          {/* Explanation of upcoming feature */}
          <p className="mt-3 text-sm text-[#475569] dark:text-slate-300">
            This is where the pathfinding logic will be integrated. Your teammate
            will use Neo4j to calculate the best route from your reference point
            to your destination.
          </p>

          {/* Status Box */}
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
            <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
              Ready for Integration
            </p>
            <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
              All required inputs are prepared for route generation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}