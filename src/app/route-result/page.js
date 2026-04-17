// "use client";

// import { useRouter } from "next/navigation";
// import { useNavio } from "../../contexts/NavioContext";

// export default function RouteResultPage() {
//   const router = useRouter();
//   const { selectedReferencePoint, selectedRoom, selectedSavedClass } = useNavio();

//   const displayRoom =
//     selectedSavedClass?.roomNumber || selectedRoom || "No room selected";

//   return (
//     <main className="min-h-screen bg-gray-100 px-6 py-10 text-black dark:bg-slate-700 dark:text-white">
//       <div className="mx-auto max-w-2xl rounded-xl border-2 border-teal-500 bg-white p-8 shadow-md dark:bg-slate-800">
//         <h1 className="mb-6 text-center text-4xl font-bold">Route Result</h1>

//         <div className="space-y-4 text-lg">
//           <p>
//             <span className="font-semibold">Reference Point:</span>{" "}
//             {selectedReferencePoint
//               ? selectedReferencePoint.info
//               : "Not scanned yet"}
//           </p>

//           <p>
//             <span className="font-semibold">Destination Room:</span>{" "}
//             {displayRoom}
//           </p>

//           {selectedSavedClass && (
//             <>
//               <p>
//                 <span className="font-semibold">Saved Building:</span>{" "}
//                 {selectedSavedClass.building}
//               </p>

//               <p>
//                 <span className="font-semibold">Saved Day:</span>{" "}
//                 {selectedSavedClass.day}
//               </p>

//               <p>
//                 <span className="font-semibold">Saved Time:</span>{" "}
//                 {selectedSavedClass.time}
//               </p>
//             </>
//           )}
//         </div>

//         <div className="mt-8 rounded-xl border border-pink-300 bg-pink-50 p-5 dark:border-pink-500 dark:bg-pink-900/30">
//           <p className="font-semibold text-pink-700 dark:text-pink-300">
//             Path logic placeholder
//           </p>
//           <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
//             This page confirms that the selected room and scanned reference point
//             are ready. Your teammate can connect Neo4j pathfinding here later.
//           </p>
//         </div>

//         <div className="mt-6 flex flex-col gap-3 sm:flex-row">
//           <button
//             onClick={() => router.push("/scan")}
//             className="w-full rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//           >
//             Scan Reference Point
//           </button>

//           <button
//             onClick={() => router.push("/search-room")}
//             className="w-full rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//           >
//             Search Another Room
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useUserAuth } from "../../contexts/AuthContext";

// export default function DashboardPage() {
//   const { user } = useUserAuth();

//   if (user === null) {
//     return (
//       <main className="min-h-screen bg-gray-100 px-10 py-10 text-center text-black dark:bg-slate-700 dark:text-white">
//         <div className="mx-auto max-w-md rounded-xl border-2 border-teal-500 bg-white p-8 shadow-md dark:bg-slate-800">
//           <h1 className="mb-4 text-3xl font-bold">Access Denied</h1>
//           <p>You must be logged in to view your dashboard.</p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gray-100 px-6 py-10 text-black dark:bg-slate-700 dark:text-white">
//       <h1 className="mb-8 text-center text-4xl font-bold">Navio Dashboard</h1>

//       <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
//         <Link
//           href="/search-room"
//           className="rounded-xl border-2 border-teal-500 bg-white p-8 shadow-md transition hover:shadow-lg dark:bg-slate-800"
//         >
//           <h2 className="mb-3 text-2xl font-bold">Search a Room</h2>
//           <p className="text-slate-700 dark:text-slate-200">
//             Search for a classroom by room number after scanning your reference point.
//           </p>
//         </Link>

//         <Link
//           href="/saved-classes"
//           className="rounded-xl border-2 border-teal-500 bg-white p-8 shadow-md transition hover:shadow-lg dark:bg-slate-800"
//         >
//           <h2 className="mb-3 text-2xl font-bold">Saved Classes</h2>
//           <p className="text-slate-700 dark:text-slate-200">
//             View and use your saved semester classroom list.
//           </p>
//         </Link>

//         <Link
//           href="/add-class"
//           className="rounded-xl border-2 border-teal-500 bg-white p-8 shadow-md transition hover:shadow-lg dark:bg-slate-800"
//         >
//           <h2 className="mb-3 text-2xl font-bold">Add Class</h2>
//           <p className="text-slate-700 dark:text-slate-200">
//             Save a classroom with building name, room number, and schedule.
//           </p>
//         </Link>

//         <Link
//           href="/scan"
//           className="rounded-xl border-2 border-pink-500 bg-white p-8 shadow-md transition hover:shadow-lg dark:bg-slate-800"
//         >
//           <h2 className="mb-3 text-2xl font-bold">Scan Reference Point</h2>
//           <p className="text-slate-700 dark:text-slate-200">
//             Open the QR scanner and identify your current reference point.
//           </p>
//         </Link>

//         <Link
//           href="/profile"
//           className="rounded-xl border-2 border-teal-500 bg-white p-8 shadow-md transition hover:shadow-lg dark:bg-slate-800"
//         >
//           <h2 className="mb-3 text-2xl font-bold">Profile</h2>
//           <p className="text-slate-700 dark:text-slate-200">
//             View your account details.
//           </p>
//         </Link>

//         <Link
//           href="/settings"
//           className="rounded-xl border-2 border-teal-500 bg-white p-8 shadow-md transition hover:shadow-lg dark:bg-slate-800"
//         >
//           <h2 className="mb-3 text-2xl font-bold">Settings</h2>
//           <p className="text-slate-700 dark:text-slate-200">
//             Change dark mode and manage your account.
//           </p>
//         </Link>
//       </div>
//     </main>
//   );
// }




"use client";

import { useRouter } from "next/navigation";
import { useNavio } from "../../contexts/NavioContext";
import { useState } from "react";
import { mapData } from "@/data/mapData";
import { dijkstra } from "../utils/dijkstra";
import MapCanvas from "@/components/MapCanvas";

export default function RouteResultPage() {
  const [start] = useState("N0"); // fixed start (your red dot)
  const [end, setEnd] = useState("");
  const [path, setPath] = useState([]);
  const router = useRouter();
  const { selectedReferencePoint, selectedRoom, selectedSavedClass } = useNavio();

  const handleNavigate = () => {
    if (!end) return;

    const result = dijkstra(mapData, start, end);
    setPath(result);
  };


  const displayRoom =
    selectedSavedClass?.roomNumber || selectedRoom || "No room selected";

  return (
    <main className="space-y-8">

      {/* HEADER / HERO */}
      <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
        <span className="inline-block rounded-full bg-red-50 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#E11D48] dark:bg-red-500/10 dark:text-red-300">
          ROUTE READY
        </span>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Navigation Ready
        </h1>

        <p className="mt-3 max-w-2xl text-[#475569] dark:text-slate-300">
          Your reference point and destination have been identified. The system
          is ready to generate the navigation path.
        </p>
      </section>

      {/* MAIN INFO */}
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

        {/* LEFT SIDE */}
        <div className="space-y-4">

          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="mb-4 text-xl font-bold">Navigation Details</h2>

            <div className="space-y-4">

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                  Reference Point
                </p>
                <p className="mt-1 text-lg font-semibold">
                  {selectedReferencePoint
                    ? selectedReferencePoint.info
                    : "Not scanned yet"}
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                  Destination Room
                </p>
                <p className="mt-1 text-lg font-semibold">{displayRoom}</p>
              </div>

              {selectedSavedClass && (
                <>
                  <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                    <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                      Building
                    </p>
                    <p className="mt-1 text-lg font-semibold">
                      {selectedSavedClass.building}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                      <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                        Day
                      </p>
                      <p className="mt-1 font-semibold">
                        {selectedSavedClass.day}
                      </p>
                    </div>

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
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => router.push("/scan")}
              className="rounded-xl bg-[#0B5FFF] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Scan Again
            </button>

            <button
              onClick={() => router.push("/search-room")}
              className="rounded-xl bg-[#E11D48] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Search Another Room
            </button>
          </div>
        </div>

        {/* RIGHT SIDE INFO */}
        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
          <h2 className="text-xl font-bold">Next Step</h2>

          <p className="mt-3 text-sm text-[#475569] dark:text-slate-300">
            This is where the pathfinding logic will be integrated. Your teammate
            will use Neo4j to calculate the best route from your reference point
            to your destination.
          </p>

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
