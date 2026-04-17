"use client"; // Enables client-side rendering for this page

// Link is used for client-side navigation between pages
import Link from "next/link";

// Custom auth context provides current user state and auth actions
import { useUserAuth } from "../contexts/AuthContext";

// Reusable card component used at the bottom feature section
import NavioHomeCard from "../components/NavioHomeCard";

/**
 * HomePage
 * --------------------------------------------------
 * Main landing page of the Navio application.
 * This page:
 * - introduces the app
 * - allows scanning/search entry points
 * - supports Google/GitHub login
 * - shows different UI for guest users and logged-in users
 */
export default function HomePage() {
  // Extract current user and authentication helper functions from context
  const { user, googleSignIn, gitHubSignIn, firebaseSignOut } = useUserAuth();

  /**
   * Handles Google login flow.
   * If login fails, the error is logged for debugging.
   */
  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  /**
   * Handles GitHub login flow.
   * If login fails, the error is logged for debugging.
   */
  const handleGitHubLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub Login Error:", error);
    }
  };

  /**
   * Handles logout flow for the current authenticated user.
   * If logout fails, the error is logged for debugging.
   */
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <main className="space-y-10">
      {/* Hero section:
          Introduces the product, highlights main value,
          and gives users direct action buttons to begin navigation flow. */}
      <section className="overflow-hidden rounded-[32px] border border-[#E2E8F0] bg-white shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
        <div className="grid gap-10 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-14">
          {/* Left side hero content:
              branding, title, description, CTA buttons, and feature tags */}
          <div className="text-left">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#0B5FFF] dark:bg-blue-500/10 dark:text-blue-300">
              NAVIO
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
              Indoor campus navigation made simple
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#475569] dark:text-slate-300 sm:text-lg">
              Scan your reference point, search your classroom, validate the room
              from Firebase, and continue into a route-ready navigation flow built
              for students.
            </p>

            {/* Primary entry actions for the user */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/scan"
                className="inline-flex items-center justify-center rounded-2xl bg-[#0B5FFF] px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:opacity-90"
              >
                Start Scanning
              </Link>

              <Link
                href="/search-room"
                className="inline-flex items-center justify-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-3 font-semibold text-[#0F172A] transition hover:bg-blue-50 dark:border-[#334155] dark:bg-[#0F172A] dark:text-white dark:hover:bg-[#162033]"
              >
                Search Room
              </Link>
            </div>

            {/* Quick feature highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#0B5FFF] dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
                QR Reference Scanning
              </span>
              <span className="rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-medium text-[#E11D48] dark:border-red-400/20 dark:bg-red-500/10 dark:text-red-300">
                Room Validation
              </span>
              <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#0B5FFF] dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
                Saved Classes
              </span>
            </div>
          </div>

          {/* Right side hero panel:
              shows a simplified preview of the student navigation workflow */}
          <div className="flex items-center">
            <div className="w-full rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-inner dark:border-[#334155] dark:bg-[#0F172A]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#0B5FFF] dark:text-blue-300">
                    Live Preview
                  </p>
                  <p className="mt-1 text-lg font-bold text-[#0F172A] dark:text-white">
                    Student Navigation Flow
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm dark:bg-[#1E293B]">
                  📍
                </div>
              </div>

              {/* Step-by-step explanation of how Navio works */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-blue-100 bg-white p-4 dark:border-blue-400/20 dark:bg-[#1E293B]">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    1. Scan QR checkpoint
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    Detect your current indoor reference point.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-4 dark:border-blue-400/20 dark:bg-[#1E293B]">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    2. Search classroom
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    Validate destination room directly from Firebase.
                  </p>
                </div>

                <div className="rounded-2xl border border-red-100 bg-white p-4 dark:border-red-400/20 dark:bg-[#1E293B]">
                  <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                    3. Continue to route flow
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    Pass the scanned reference and destination into navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest user section:
          Only displayed when the user is not logged in.
          Encourages sign-in and explains benefits of using Navio. */}
      {!user && (
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          {/* Left guest panel:
              authentication actions and guest continuation option */}
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
              Get started with Navio
            </h2>
            <p className="mt-3 max-w-2xl text-[#475569] dark:text-slate-300">
              Sign in to save classroom lists, manage your semester destinations,
              and use protected navigation features.
            </p>

            {/* Login and guest entry buttons */}
            <div className="mt-6 flex flex-col gap-4">
              <button
                onClick={handleGoogleLogin}
                className="w-full rounded-2xl bg-[#0B5FFF] px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:opacity-90"
              >
                Login with Google
              </button>

              <button
                onClick={handleGitHubLogin}
                className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-3 font-semibold text-[#0F172A] transition hover:bg-blue-50 dark:border-[#334155] dark:bg-[#0F172A] dark:text-white dark:hover:bg-[#162033]"
              >
                Login with GitHub
              </button>

              <Link
                href="/scan"
                className="w-full rounded-2xl bg-[#E11D48] px-6 py-3 text-center font-semibold text-white shadow-md shadow-red-500/20 transition hover:opacity-90"
              >
                Continue as New Student
              </Link>
            </div>
          </div>

          {/* Right guest panel:
              explains the advantages and purpose of the app */}
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
              Why use Navio?
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                  Faster classroom access
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Reach your saved destinations with fewer repeated steps.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                  Better for new students
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Scan a nearby reference point and begin your navigation flow.
                </p>
              </div>

              <div className="rounded-2xl border border-red-100 bg-red-50/70 p-4 dark:border-red-400/20 dark:bg-red-500/10">
                <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                  Route-ready structure
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Built to connect with future pathfinding logic and Neo4j.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Authenticated user section:
          Only displayed when the user is logged in.
          Gives personalized access to dashboard and shortcuts. */}
      {user && (
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          {/* Left logged-in panel:
              user greeting, dashboard navigation, profile/settings/logout */}
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
              Welcome back
            </h2>

            <p className="mt-3 text-base text-[#475569] dark:text-slate-300">
              {user.displayName} ({user.email})
            </p>

            {/* Main account action buttons */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/dashboard"
                className="rounded-2xl bg-[#0B5FFF] px-6 py-3 text-center font-semibold text-white shadow-md shadow-blue-500/20 transition hover:opacity-90"
              >
                Go to Dashboard
              </Link>

              <Link
                href="/profile"
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-3 text-center font-semibold text-[#0F172A] transition hover:bg-blue-50 dark:border-[#334155] dark:bg-[#0F172A] dark:text-white dark:hover:bg-[#162033]"
              >
                Profile Page
              </Link>

              <Link
                href="/settings"
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-3 text-center font-semibold text-[#0F172A] transition hover:bg-blue-50 dark:border-[#334155] dark:bg-[#0F172A] dark:text-white dark:hover:bg-[#162033]"
              >
                Settings
              </Link>

              <button
                onClick={handleLogout}
                className="rounded-2xl bg-[#E11D48] px-6 py-3 font-semibold text-white shadow-md shadow-red-500/20 transition hover:opacity-90"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Right logged-in panel:
              provides quick access links to common student actions */}
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
              Quick access
            </h2>

            <div className="mt-6 space-y-4">
              <Link
                href="/saved-classes"
                className="block rounded-2xl border border-blue-100 bg-blue-50/70 p-4 transition hover:shadow-md dark:border-blue-400/20 dark:bg-blue-500/10"
              >
                <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                  Saved Classes
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Continue to your stored semester destinations.
                </p>
              </Link>

              <Link
                href="/scan"
                className="block rounded-2xl border border-red-100 bg-red-50/70 p-4 transition hover:shadow-md dark:border-red-400/20 dark:bg-red-500/10"
              >
                <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                  Scan Reference Point
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Start a new navigation flow from your current location.
                </p>
              </Link>

              <Link
                href="/search-room"
                className="block rounded-2xl border border-blue-100 bg-blue-50/70 p-4 transition hover:shadow-md dark:border-blue-400/20 dark:bg-blue-500/10"
              >
                <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                  Search Room
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Validate a destination room directly from Firebase.
                </p>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final feature highlight section:
          uses reusable cards to summarize Navio's core functionalities */}
      <section className="grid gap-6 md:grid-cols-3">
        <NavioHomeCard
          title="Scan Reference Point"
          text="Students can scan a QR checkpoint to identify their current indoor starting location."
        />

        <NavioHomeCard
          title="Search Classroom"
          text="Students can enter a room number and check if that classroom exists in Firebase."
        />

        <NavioHomeCard
          title="Save Semester Classes"
          text="Logged-in students can store classroom cards for quick access during the semester."
        />
      </section>
    </main>
  );
}