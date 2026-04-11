"use client";

import { useTheme } from "../../contexts/ThemeContext";
import { useUserAuth } from "../../contexts/AuthContext";

export default function SettingsPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { user, firebaseSignOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  if (user === null) {
    return (
      <main className="flex items-center justify-center py-16">
        <div className="w-full max-w-md rounded-3xl border border-[#E2E8F0] bg-white p-10 text-center shadow-xl dark:border-[#334155] dark:bg-[#1E293B]">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl dark:bg-red-500/10">
            🚫
          </div>

          <h1 className="mb-3 text-3xl font-bold tracking-tight">Access Denied</h1>

          <p className="text-[#475569] dark:text-slate-300">
            You must be logged in to view settings.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="space-y-8">
      <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#0B5FFF] dark:bg-blue-500/10 dark:text-blue-300">
              SETTINGS
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Account & Appearance
            </h1>

            <p className="mt-3 max-w-2xl text-[#475569] dark:text-slate-300">
              Manage your Navio experience, switch themes, and control your
              account session from one place.
            </p>
          </div>

          <div className="rounded-2xl border border-red-100 bg-red-50/70 px-5 py-4 dark:border-red-400/20 dark:bg-red-500/10">
            <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
              Personal controls
            </p>
            <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
              Update visual preferences and manage your sign-in session.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-500/10">
                🎨
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight">Appearance</h2>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Switch between light mode and dark mode for a better browsing
                  experience.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 dark:border-[#334155] dark:bg-[#0F172A]">
              <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                Active Theme
              </p>
              <p className="mt-2 text-lg font-semibold text-[#0F172A] dark:text-white">
                {darkMode ? "Dark Mode" : "Light Mode"}
              </p>

              <button
                onClick={toggleDarkMode}
                className="mt-5 rounded-2xl bg-[#0B5FFF] px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:opacity-90"
              >
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-xl dark:bg-red-500/10">
                🔐
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight">Account</h2>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Manage your current authenticated Navio session.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 dark:border-[#334155] dark:bg-[#0F172A]">
              <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                Sign Out
              </p>
              <p className="mt-2 text-sm leading-6 text-[#475569] dark:text-slate-300">
                Use this option to safely log out of your Navio account.
              </p>

              <button
                onClick={handleLogout}
                className="mt-5 rounded-2xl bg-[#E11D48] px-6 py-3 font-semibold text-white shadow-md shadow-red-500/20 transition hover:opacity-90"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="text-xl font-bold tracking-tight">Settings Summary</h2>
            <p className="mt-3 text-sm leading-6 text-[#475569] dark:text-slate-300">
              This page gives users quick control over the visual appearance of
              Navio and their current logged-in session.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="text-xl font-bold tracking-tight">Current Status</h2>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                  Theme Control Enabled
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  You can switch the Navio interface theme anytime.
                </p>
              </div>

              <div className="rounded-2xl border border-red-100 bg-red-50/70 p-4 dark:border-red-400/20 dark:bg-red-500/10">
                <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                  Session Management Ready
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Your logout action is available directly from this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}