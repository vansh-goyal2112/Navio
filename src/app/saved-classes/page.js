"use client"; // Enables client-side rendering for this Next.js page

// React hooks for state management and lifecycle
import { useEffect, useState } from "react";

// Router for navigation between pages
import { useRouter } from "next/navigation";

// Authentication context to access current logged-in user
import { useUserAuth } from "../../contexts/AuthContext";

// Navio context to store selected class globally
import { useNavio } from "../../contexts/NavioContext";

// Service functions to interact with backend (Firestore/API)
import {
  getSavedClasses,
  deleteSavedClass,
} from "../../services/navio-service";

// Component to display list of saved classes
import SavedClassList from "../../components/SavedClassList";

/**
 * SavedClassesPage Component
 * --------------------------------------------------
 * Purpose:
 * - Displays all saved classes for the logged-in user
 * - Allows user to delete a class
 * - Allows user to select a class and proceed to scan flow
 * - Fetches data from backend and manages local state
 * - Restricts access if user is not authenticated
 */
export default function SavedClassesPage() {

  // State to store list of saved classes
  const [classes, setClasses] = useState([]);

  // Get authenticated user
  const { user } = useUserAuth();

  // Get function to store selected class globally
  const { setSelectedSavedClass } = useNavio();

  // Router for navigation
  const router = useRouter();

  /**
   * loadClasses Function
   * --------------------------------------------------
   * Fetches saved classes from backend for the current user
   * Updates local state with retrieved data
   */
  async function loadClasses() {
    if (!user?.uid) return;

    const savedClasses = await getSavedClasses(user.uid);

    setClasses(savedClasses);
  }

  /**
   * useEffect Hook
   * --------------------------------------------------
   * Runs when user changes
   * Ensures classes are loaded only when user is authenticated
   */
  useEffect(() => {
    if (!user?.uid) return;
    loadClasses();
  }, [user]);

  /**
   * handleDeleteClass
   * --------------------------------------------------
   * Deletes a class from backend
   * Updates UI by removing it from state
   */
  const handleDeleteClass = async (classId) => {
    if (!user?.uid) return;

    // Delete from backend
    await deleteSavedClass(user.uid, classId);

    // Update local state (remove deleted item)
    setClasses((prev) => prev.filter((item) => item.id !== classId));
  };

  /**
   * handleSelectClass
   * --------------------------------------------------
   * Stores selected class in global context
   * Redirects user to scan page for navigation flow
   */
  const handleSelectClass = (classItem) => {
    setSelectedSavedClass(classItem);

    // Navigate to scan page
    router.push("/scan");
  };

  /**
   * Access Control
   * --------------------------------------------------
   * If user is not logged in:
   * - Show access denied UI
   * - Prevent access to saved classes
   */
  if (user === null) {
    return (
      <main className="flex items-center justify-center py-16">
        <div className="w-full max-w-md rounded-3xl border border-[#E2E8F0] bg-white p-10 text-center shadow-xl dark:border-[#334155] dark:bg-[#1E293B]">
          
          {/* Access Denied Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl dark:bg-red-500/10">
            🚫
          </div>

          {/* Heading */}
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Access Denied</h2>

          {/* Message */}
          <p className="text-[#475569] dark:text-slate-300">
            You must be logged in to view saved classes.
          </p>
        </div>
      </main>
    );
  }

  /**
   * Main UI (Authenticated Users Only)
   * --------------------------------------------------
   * Sections:
   * 1. Header (title + description)
   * 2. Saved class list (left)
   * 3. Info panels (right)
   */
  return (
    <main className="space-y-8">

      {/* HEADER SECTION */}
      {/* Displays page title and quick instructions */}
      <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
        
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          
          {/* Left: Title + description */}
          <div>
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#0B5FFF] dark:bg-blue-500/10 dark:text-blue-300">
              SAVED DESTINATIONS
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Saved Classes
            </h1>

            <p className="mt-3 max-w-2xl text-[#475569] dark:text-slate-300">
              Access your saved semester classrooms and quickly continue to the
              scan flow for route preparation.
            </p>
          </div>

          {/* Right: Quick Tip Box */}
          <div className="rounded-2xl border border-red-100 bg-red-50/70 px-5 py-4 dark:border-red-400/20 dark:bg-red-500/10">
            <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
              Quick tip
            </p>
            <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
              Select any saved class card to scan your current reference point.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

        {/* LEFT SIDE: SAVED CLASS LIST */}
        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-4 shadow-lg dark:border-[#334155] dark:bg-[#1E293B] sm:p-6">
          
          {/* Pass data + handlers to child component */}
          <SavedClassList
            classes={classes}
            onDeleteClass={handleDeleteClass}
            onSelectClass={handleSelectClass}
          />
        </div>

        {/* RIGHT SIDE: INFO PANELS */}
        <div className="space-y-6">

          {/* HOW IT WORKS SECTION */}
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            
            <h2 className="text-xl font-bold tracking-tight">How it works</h2>

            <div className="mt-5 space-y-4">

              {/* Step 1 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                  1. Pick a saved class
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Choose a classroom card you want to navigate to.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                  2. Scan your reference point
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Navio identifies your current indoor location using the QR
                  checkpoint.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border border-red-100 bg-red-50/70 p-4 dark:border-red-400/20 dark:bg-red-500/10">
                <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                  3. Continue to route flow
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Your selected class and reference point are prepared for path
                  generation.
                </p>
              </div>

            </div>
          </div>

          {/* STATUS SECTION */}
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            
            <h2 className="text-xl font-bold tracking-tight">Saved Class Status</h2>

            {/* Dynamic message based on number of saved classes */}
            <p className="mt-3 text-sm leading-6 text-[#475569] dark:text-slate-300">
              {classes.length === 0
                ? "You have not saved any classes yet. Add classroom entries to start building your semester list."
                : `You currently have ${classes.length} saved class${
                    classes.length === 1 ? "" : "es"
                  } available for quick access.`}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}