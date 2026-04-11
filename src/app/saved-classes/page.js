"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import { useNavio } from "../../contexts/NavioContext";
import {
  getSavedClasses,
  deleteSavedClass,
} from "../../services/navio-service";
import SavedClassList from "../../components/SavedClassList";

export default function SavedClassesPage() {
  const [classes, setClasses] = useState([]);
  const { user } = useUserAuth();
  const { setSelectedSavedClass } = useNavio();
  const router = useRouter();

  async function loadClasses() {
    if (!user?.uid) return;
    const savedClasses = await getSavedClasses(user.uid);
    setClasses(savedClasses);
  }

  useEffect(() => {
    if (!user?.uid) return;
    loadClasses();
  }, [user]);

  const handleDeleteClass = async (classId) => {
    if (!user?.uid) return;

    await deleteSavedClass(user.uid, classId);
    setClasses((prev) => prev.filter((item) => item.id !== classId));
  };

  const handleSelectClass = (classItem) => {
    setSelectedSavedClass(classItem);
    router.push("/scan");
  };

  if (user === null) {
    return (
      <main className="flex items-center justify-center py-16">
        <div className="w-full max-w-md rounded-3xl border border-[#E2E8F0] bg-white p-10 text-center shadow-xl dark:border-[#334155] dark:bg-[#1E293B]">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl dark:bg-red-500/10">
            🚫
          </div>

          <h2 className="mb-3 text-3xl font-bold tracking-tight">Access Denied</h2>

          <p className="text-[#475569] dark:text-slate-300">
            You must be logged in to view saved classes.
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

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-4 shadow-lg dark:border-[#334155] dark:bg-[#1E293B] sm:p-6">
          <SavedClassList
            classes={classes}
            onDeleteClass={handleDeleteClass}
            onSelectClass={handleSelectClass}
          />
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="text-xl font-bold tracking-tight">How it works</h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                  1. Pick a saved class
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Choose a classroom card you want to navigate to.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                  2. Scan your reference point
                </p>
                <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                  Navio identifies your current indoor location using the QR
                  checkpoint.
                </p>
              </div>

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

          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="text-xl font-bold tracking-tight">Saved Class Status</h2>
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