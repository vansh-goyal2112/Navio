"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RoomSearchForm from "../../components/RoomSearchForm";
import { findRoomByNumber } from "../../services/navio-service";
import { useNavio } from "../../contexts/NavioContext";

export default function SearchRoomPage() {
  const [matchedRoom, setMatchedRoom] = useState(null);
  const [error, setError] = useState("");
  const [searchedRoom, setSearchedRoom] = useState("");
  const router = useRouter();

  const { setSelectedRoom } = useNavio();

  const handleSearchRoom = async (roomNumber) => {
    setError("");
    setMatchedRoom(null);
    setSearchedRoom(roomNumber);

    const room = await findRoomByNumber(roomNumber);

    if (!room) {
      setError("Invalid room number. Please enter a valid classroom.");
      return;
    }

    setMatchedRoom(room);
    setSelectedRoom(room.roomNumber);
  };

  const handleContinue = () => {
    router.push("/route-result");
  };

  return (
    <main className="space-y-8">
      <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
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

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-4 shadow-lg dark:border-[#334155] dark:bg-[#1E293B] sm:p-6">
          <RoomSearchForm onSearchRoom={handleSearchRoom} />
        </div>

        <div className="space-y-6">
          {error && (
            <div className="rounded-[28px] border border-red-200 bg-red-50 p-6 shadow-lg dark:border-red-500/20 dark:bg-red-500/10">
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

              <p className="text-sm leading-6 text-red-700 dark:text-red-300">
                {error}
              </p>
            </div>
          )}

          {matchedRoom && (
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
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

              <div className="space-y-4">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    Room Number
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#0F172A] dark:text-white">
                    {matchedRoom.roomNumber}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    Building
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#0F172A] dark:text-white">
                    {matchedRoom.building}
                  </p>
                </div>

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

              <button
                onClick={handleContinue}
                className="mt-6 w-full rounded-2xl bg-[#0B5FFF] px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:opacity-90"
              >
                Continue
              </button>
            </div>
          )}

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

          {!matchedRoom && !error && !searchedRoom && (
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
              <h2 className="text-xl font-bold tracking-tight">How this works</h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    1. Enter a room number
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    Search using the same format stored in Firebase.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    2. Validate destination
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    Navio checks whether the classroom exists.
                  </p>
                </div>

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