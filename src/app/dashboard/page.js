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

import Link from "next/link";
import { useUserAuth } from "../../contexts/AuthContext";

export default function DashboardPage() {
  const { user } = useUserAuth();

  if (user === null) {
    return (
      <main className="flex items-center justify-center py-16">
        <div className="w-full max-w-md rounded-3xl border border-[#E2E8F0] bg-white p-10 text-center shadow-xl dark:border-[#334155] dark:bg-[#1E293B]">
          <div className="mb-5 text-4xl">🚫</div>
          <h1 className="mb-3 text-3xl font-bold">Access Denied</h1>
          <p className="text-[#475569] dark:text-slate-300">
            You must be logged in to view your dashboard.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="space-y-10">
      
      {/* HERO SECTION */}
      <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
        <div className="flex flex-col gap-4">
          <span className="inline-block w-fit rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-widest text-[#0B5FFF] dark:bg-blue-500/10 dark:text-blue-300">
            DASHBOARD
          </span>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome to Navio
          </h1>

          <p className="max-w-2xl text-[#475569] dark:text-slate-300">
            Navigate your campus efficiently. Scan reference points, search classrooms,
            and manage your semester schedule — all in one place.
          </p>
        </div>
      </section>

      {/* ACTION CARDS */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* CARD */}
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

        {/* CARD */}
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

        {/* CARD */}
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

        {/* CARD */}
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

        {/* CARD */}
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

        {/* CARD */}
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