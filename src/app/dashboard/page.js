"use client"; // Enables client-side rendering for this page in Next.js

// Import Link for client-side navigation between pages
import Link from "next/link";

// Import authentication context to get current logged-in user
import { useUserAuth } from "../../contexts/AuthContext";

/**
 * DashboardPage Component
 * --------------------------------------------------
 * Purpose:
 * - Acts as the main landing page after login
 * - Provides navigation to all major features of Navio
 * - Restricts access if user is not authenticated
 */
export default function DashboardPage() {

  // Get current authenticated user from context
  const { user } = useUserAuth();

  /**
   * Access Control
   * --------------------------------------------------
   * If user is not logged in:
   * - Show "Access Denied" UI
   * - Prevent access to dashboard features
   */
  if (user === null) {
    return (
      <main className="flex items-center justify-center py-16">
        <div className="w-full max-w-md rounded-3xl border border-[#E2E8F0] bg-white p-10 text-center shadow-xl dark:border-[#334155] dark:bg-[#1E293B]">
          
          {/* Warning Icon */}
          <div className="mb-5 text-4xl">🚫</div>

          {/* Heading */}
          <h1 className="mb-3 text-3xl font-bold">Access Denied</h1>

          {/* Message */}
          <p className="text-[#475569] dark:text-slate-300">
            You must be logged in to view your dashboard.
          </p>
        </div>
      </main>
    );
  }

  /**
   * Main Dashboard UI (Authenticated Users Only)
   * --------------------------------------------------
   * Sections:
   * 1. Hero section (intro + purpose of app)
   * 2. Action cards (navigation to key features)
   */
  return (
    <main className="space-y-10">
      
      {/* HERO SECTION */}
      {/* Displays app introduction and purpose */}
      <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
        <div className="flex flex-col gap-4">

          {/* Label / Tag */}
          <span className="inline-block w-fit rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-widest text-[#0B5FFF] dark:bg-blue-500/10 dark:text-blue-300">
            DASHBOARD
          </span>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome to Navio
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-[#475569] dark:text-slate-300">
            Navigate your campus efficiently. Scan reference points, search classrooms,
            and manage your semester schedule — all in one place.
          </p>
        </div>
      </section>

      {/* ACTION CARDS SECTION */}
      {/* Provides quick navigation to core features */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* SEARCH ROOM CARD */}
        {/* Navigates user to room search functionality */}
        <Link
          href="/search-room"
          className="group rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-[#334155] dark:bg-[#1E293B]"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-500/10">
            🔍
          </div>
          <h2 className="mb-2 text-xl font-bold group-hover:text-[#0B5FFF] dark:group-hover:text-blue-300">
            Search Room
          </h2>
          <p className="text-sm text-[#475569] dark:text-slate-300">
            Find a classroom instantly by entering its room number.
          </p>
        </Link>

        {/* SAVED CLASSES CARD */}
        {/* Navigates to user's stored classroom data */}
        <Link
          href="/saved-classes"
          className="group rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-[#334155] dark:bg-[#1E293B]"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-500/10">
            📚
          </div>
          <h2 className="mb-2 text-xl font-bold group-hover:text-[#0B5FFF] dark:group-hover:text-blue-300">
            Saved Classes
          </h2>
          <p className="text-sm text-[#475569] dark:text-slate-300">
            Access your saved semester classrooms quickly.
          </p>
        </Link>

        {/* ADD CLASS CARD */}
        {/* Navigates to form to add new class */}
        <Link
          href="/add-class"
          className="group rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-[#334155] dark:bg-[#1E293B]"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-500/10">
            ➕
          </div>
          <h2 className="mb-2 text-xl font-bold group-hover:text-[#0B5FFF] dark:group-hover:text-blue-300">
            Add Class
          </h2>
          <p className="text-sm text-[#475569] dark:text-slate-300">
            Save new classrooms with schedule details.
          </p>
        </Link>

        {/* SCAN CARD */}
        {/* Opens QR scanning functionality for location detection */}
        <Link
          href="/scan"
          className="group rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-[#334155] dark:bg-[#1E293B]"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-xl dark:bg-red-500/10">
            📷
          </div>
          <h2 className="mb-2 text-xl font-bold group-hover:text-[#E11D48] dark:group-hover:text-red-300">
            Scan
          </h2>
          <p className="text-sm text-[#475569] dark:text-slate-300">
            Scan a reference point QR to detect your location.
          </p>
        </Link>

        {/* PROFILE CARD */}
        {/* Navigates to user account details */}
        <Link
          href="/profile"
          className="group rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-[#334155] dark:bg-[#1E293B]"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-500/10">
            👤
          </div>
          <h2 className="mb-2 text-xl font-bold group-hover:text-[#0B5FFF] dark:group-hover:text-blue-300">
            Profile
          </h2>
          <p className="text-sm text-[#475569] dark:text-slate-300">
            View your account details and info.
          </p>
        </Link>

        {/* SETTINGS CARD */}
        {/* Navigates to app/user settings */}
        <Link
          href="/settings"
          className="group rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-[#334155] dark:bg-[#1E293B]"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-xl dark:bg-red-500/10">
            ⚙️
          </div>
          <h2 className="mb-2 text-xl font-bold group-hover:text-[#E11D48] dark:group-hover:text-red-300">
            Settings
          </h2>
          <p className="text-sm text-[#475569] dark:text-slate-300">
            Manage preferences and theme settings.
          </p>
        </Link>

      </section>
    </main>
  );
}