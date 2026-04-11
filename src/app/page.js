// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
//       <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-8 rounded-2xl bg-white px-10 py-20 shadow-sm">
//         <h1 className="text-4xl font-bold text-black">
//           Navio Indoor Navigation
//         </h1>

//         <p className="text-center text-lg text-zinc-600">
//           Scan QR codes to detect your indoor reference point and view it on the map.
//         </p>

//         <Link
//           href="/scan"
//           className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
//         >
//           Start Scanning
//         </Link>
//       </main>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useUserAuth } from "../contexts/AuthContext";
// import NavioHomeCard from "../components/NavioHomeCard";

// export default function HomePage() {
//   const { user, googleSignIn, gitHubSignIn, firebaseSignOut } = useUserAuth();

//   const handleGoogleLogin = async () => {
//     try {
//       await googleSignIn();
//     } catch (error) {
//       console.error("Google Login Error:", error);
//     }
//   };

//   const handleGitHubLogin = async () => {
//     try {
//       await gitHubSignIn();
//     } catch (error) {
//       console.error("GitHub Login Error:", error);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await firebaseSignOut();
//     } catch (error) {
//       console.error("Logout Error:", error);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-100 px-6 py-10 text-center text-black dark:bg-slate-700 dark:text-white">
//       <h1 className="mb-4 text-4xl font-bold">Navio</h1>

//       <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
//         Indoor campus navigation for students. Scan your reference point, search
//         your classroom, and continue to the guided path flow.
//       </p>

//       {!user && (
//         <div className="mx-auto mb-10 max-w-md rounded-xl border-2 border-teal-500 bg-white p-8 shadow-md dark:bg-slate-800">
//           <p className="mb-6 text-lg">Please login to save and manage classes.</p>

//           <div className="flex flex-col items-center gap-4">
//             <button
//               onClick={handleGoogleLogin}
//               className="w-full rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//             >
//               Login with Google
//             </button>

//             <button
//               onClick={handleGitHubLogin}
//               className="w-full rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//             >
//               Login with GitHub
//             </button>

//             <Link
//               href="/scan"
//               className="w-full rounded-md border-2 border-pink-500 bg-pink-100 px-6 py-2 font-semibold text-black transition hover:bg-pink-200 dark:bg-pink-900 dark:text-white dark:hover:bg-pink-800"
//             >
//               Continue as New Student
//             </Link>
//           </div>
//         </div>
//       )}

//       {user && (
//         <div className="mx-auto mb-10 max-w-xl rounded-xl border-2 border-teal-500 bg-white p-8 shadow-md dark:bg-slate-800">
//           <p className="mb-6 text-lg">
//             Welcome, {user.displayName} ({user.email})
//           </p>

//           <div className="flex flex-col items-center gap-4">
//             <Link
//               href="/dashboard"
//               className="w-full max-w-xs rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//             >
//               Go to Dashboard
//             </Link>

//             <Link
//               href="/profile"
//               className="w-full max-w-xs rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//             >
//               Profile Page
//             </Link>

//             <button
//               onClick={handleLogout}
//               className="w-full max-w-xs rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
//         <NavioHomeCard
//           title="Scan Reference Point"
//           text="Students can scan a QR checkpoint to identify their current indoor starting location."
//         />

//         <NavioHomeCard
//           title="Search Classroom"
//           text="Students can enter a room number and check if that classroom exists in Firebase."
//         />

//         <NavioHomeCard
//           title="Save Semester Classes"
//           text="Logged-in students can store classroom cards for quick access during the semester."
//         />
//       </div>
//     </main>
//   );
// }




// "use client";

// import Link from "next/link";
// import { useUserAuth } from "../contexts/AuthContext";
// import NavioHomeCard from "../components/NavioHomeCard";

// export default function HomePage() {
//   const { user, googleSignIn, gitHubSignIn, firebaseSignOut } = useUserAuth();

//   const handleGoogleLogin = async () => {
//     try {
//       await googleSignIn();
//     } catch (error) {
//       console.error("Google Login Error:", error);
//     }
//   };

//   const handleGitHubLogin = async () => {
//     try {
//       await gitHubSignIn();
//     } catch (error) {
//       console.error("GitHub Login Error:", error);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await firebaseSignOut();
//     } catch (error) {
//       console.error("Logout Error:", error);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-100 px-6 py-10 text-center text-black dark:bg-slate-700 dark:text-white">
//       <h1 className="mb-4 text-4xl font-bold">Navio</h1>

//       <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
//         Indoor campus navigation for students. Scan your reference point, search
//         your classroom, and continue to the guided path flow.
//       </p>

//       {!user && (
//         <div className="mx-auto mb-10 max-w-md rounded-xl border-2 border-teal-500 bg-white p-8 shadow-md dark:bg-slate-800">
//           <p className="mb-6 text-lg">Please login to save and manage classes.</p>

//           <div className="flex flex-col items-center gap-4">
//             <button
//               onClick={handleGoogleLogin}
//               className="w-full rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//             >
//               Login with Google
//             </button>

//             <button
//               onClick={handleGitHubLogin}
//               className="w-full rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//             >
//               Login with GitHub
//             </button>

//             <Link
//               href="/scan"
//               className="w-full rounded-md border-2 border-pink-500 bg-pink-100 px-6 py-2 font-semibold text-black transition hover:bg-pink-200 dark:bg-pink-900 dark:text-white dark:hover:bg-pink-800"
//             >
//               Continue as New Student
//             </Link>
//           </div>
//         </div>
//       )}

//       {user && (
//         <div className="mx-auto mb-10 max-w-xl rounded-xl border-2 border-teal-500 bg-white p-8 shadow-md dark:bg-slate-800">
//           <p className="mb-6 text-lg">
//             Welcome, {user.displayName} ({user.email})
//           </p>

//           <div className="flex flex-col items-center gap-4">
//             <Link
//               href="/dashboard"
//               className="w-full max-w-xs rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//             >
//               Go to Dashboard
//             </Link>

//             <Link
//               href="/profile"
//               className="w-full max-w-xs rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//             >
//               Profile Page
//             </Link>

//             <Link
//               href="/settings"
//               className="w-full max-w-xs rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//             >
//               Settings
//             </Link>

//             <button
//               onClick={handleLogout}
//               className="w-full max-w-xs rounded-md border-2 border-teal-500 bg-gray-100 px-6 py-2 font-semibold text-black transition hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
//         <NavioHomeCard
//           title="Scan Reference Point"
//           text="Students can scan a QR checkpoint to identify their current indoor starting location."
//         />

//         <NavioHomeCard
//           title="Search Classroom"
//           text="Students can enter a room number and check if that classroom exists in Firebase."
//         />

//         <NavioHomeCard
//           title="Save Semester Classes"
//           text="Logged-in students can store classroom cards for quick access during the semester."
//         />
//       </div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";
import NavioHomeCard from "../components/NavioHomeCard";

export default function HomePage() {
  const { user, googleSignIn, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub Login Error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <main className="space-y-10">
      <section className="overflow-hidden rounded-[32px] border border-[#E2E8F0] bg-white shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
        <div className="grid gap-10 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-14">
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

      {!user && (
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
              Get started with Navio
            </h2>
            <p className="mt-3 max-w-2xl text-[#475569] dark:text-slate-300">
              Sign in to save classroom lists, manage your semester destinations,
              and use protected navigation features.
            </p>

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

      {user && (
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
              Welcome back
            </h2>

            <p className="mt-3 text-base text-[#475569] dark:text-slate-300">
              {user.displayName} ({user.email})
            </p>

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