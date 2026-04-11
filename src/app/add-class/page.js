"use client";

import { useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import SavedClassForm from "../../components/SavedClassForm";
import { addSavedClass } from "../../services/navio-service";

export default function AddClassPage() {
  const { user } = useUserAuth();
  const [lastAdded, setLastAdded] = useState(null);

  const handleAddClass = async (newClass) => {
    if (!user?.uid) return;

    const id = await addSavedClass(user.uid, newClass);
    const classWithId = { ...newClass, id };
    setLastAdded(classWithId);
  };

  if (user === null) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] px-6 py-12 text-[#0F172A] dark:bg-[#0F172A] dark:text-white">
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#E2E8F0] bg-white p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-[#334155] dark:bg-[#1E293B]">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl dark:bg-red-500/10">
            🚫
          </div>

          <h2 className="mb-3 text-3xl font-bold tracking-tight">Access Denied</h2>

          <p className="text-base text-[#475569] dark:text-slate-300">
            You must be logged in to add classes.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-4 py-8 text-[#0F172A] dark:bg-[#0F172A] dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[28px] border border-[#E2E8F0] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-[#334155] dark:bg-[#1E293B] sm:px-8">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B5FFF] dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
            Navio
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Add Class
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#475569] dark:text-slate-300 sm:text-base">
            Save your semester classroom details so you can quickly access them
            later and start navigation from any scanned reference point.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-[#334155] dark:bg-[#1E293B] sm:p-6">
            <SavedClassForm onAddClass={handleAddClass} />
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-[#334155] dark:bg-[#1E293B]">
              <h2 className="text-xl font-bold tracking-tight">Why save classes?</h2>
              <p className="mt-3 text-sm leading-6 text-[#475569] dark:text-slate-300">
                Saved classes make it easier for returning students to reuse
                common destinations during the semester without typing room
                numbers every time.
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    Faster daily use
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    Store classes once and use them again whenever needed.
                  </p>
                </div>

                <div className="rounded-2xl border border-red-100 bg-red-50/70 p-4 dark:border-red-400/20 dark:bg-red-500/10">
                  <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                    Ready for scanning flow
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    After selecting a saved class, the student can scan their
                    current reference point and continue to navigation.
                  </p>
                </div>
              </div>
            </div>

            {lastAdded && (
              <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-[#334155] dark:bg-[#1E293B]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-500/10">
                    ✅
                  </div>
                  <div>
                    <p className="text-lg font-bold">Last Added</p>
                    <p className="text-sm text-[#475569] dark:text-slate-300">
                      Your most recently saved classroom
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#0F172A]">
                  <p className="break-words text-base font-semibold text-[#0F172A] dark:text-white">
                    {lastAdded.roomNumber}
                  </p>
                  <p className="mt-2 break-words text-sm text-[#475569] dark:text-slate-300">
                    <span className="font-semibold text-[#0B5FFF] dark:text-blue-300">
                      Building:
                    </span>{" "}
                    {lastAdded.building}
                  </p>
                  <p className="mt-1 break-words text-sm text-[#475569] dark:text-slate-300">
                    <span className="font-semibold text-[#0B5FFF] dark:text-blue-300">
                      Day:
                    </span>{" "}
                    {lastAdded.day}
                  </p>
                  <p className="mt-1 break-words text-sm text-[#475569] dark:text-slate-300">
                    <span className="font-semibold text-[#E11D48] dark:text-red-300">
                      Time:
                    </span>{" "}
                    {lastAdded.time}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}