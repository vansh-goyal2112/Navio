"use client";

import { useUserAuth } from "../../contexts/AuthContext";

export default function ProfilePage() {
  const { user } = useUserAuth();

  if (user === null) {
    return (
      <main className="flex items-center justify-center py-16">
        <div className="w-full max-w-md rounded-3xl border border-[#E2E8F0] bg-white p-10 text-center shadow-xl dark:border-[#334155] dark:bg-[#1E293B]">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl dark:bg-red-500/10">
            🚫
          </div>

          <h1 className="mb-3 text-3xl font-bold tracking-tight">Access Denied</h1>

          <p className="text-[#475569] dark:text-slate-300">
            You must be logged in to view your profile.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="space-y-8">
      <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#0B5FFF] dark:bg-blue-500/10 dark:text-blue-300">
              PROFILE
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Navio Profile
            </h1>

            <p className="mt-3 max-w-2xl text-[#475569] dark:text-slate-300">
              View your account details and profile information connected to your
              Navio experience.
            </p>
          </div>

          {user.photoURL && (
            <div className="flex justify-start sm:justify-end">
              <img
                src={user.photoURL}
                alt="User profile"
                className="h-24 w-24 rounded-3xl border-4 border-blue-100 object-cover shadow-md dark:border-blue-500/20"
              />
            </div>
          )}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            Account Information
          </h2>

          <div className="space-y-4">
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 dark:border-[#334155] dark:bg-[#0F172A]">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0B5FFF] dark:text-blue-300">
                Name
              </p>
              <p className="mt-2 text-lg font-semibold text-[#0F172A] dark:text-white">
                {user.displayName || "No display name available"}
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 dark:border-[#334155] dark:bg-[#0F172A]">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0B5FFF] dark:text-blue-300">
                Email
              </p>
              <p className="mt-2 break-words text-lg font-semibold text-[#0F172A] dark:text-white">
                {user.email}
              </p>
            </div>

            {user.uid && (
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 dark:border-[#334155] dark:bg-[#0F172A]">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#E11D48] dark:text-red-300">
                  User ID
                </p>
                <p className="mt-2 break-all text-sm font-medium text-[#475569] dark:text-slate-300">
                  {user.uid}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="text-xl font-bold tracking-tight">Profile Summary</h2>
            <p className="mt-3 text-sm leading-6 text-[#475569] dark:text-slate-300">
              This profile is connected to your authenticated Navio account and is
              used for saved classroom access, room search flow, and future
              personalized navigation features.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="text-xl font-bold tracking-tight">Navio Status</h2>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                  Authentication Active
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Your account is signed in and ready to use protected Navio
                  features.
                </p>
              </div>

              <div className="rounded-2xl border border-red-100 bg-red-50/70 p-4 dark:border-red-400/20 dark:bg-red-500/10">
                <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                  Profile Connected
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Your account details are available for saved classes and future
                  route-based personalization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}