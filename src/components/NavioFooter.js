// Import Link for client-side navigation
import Link from "next/link";

/**
 * NavioFooter Component
 * --------------------------------------------------
 * Purpose:
 * - Displays footer across all pages
 * - Provides branding, quick navigation links, and app description
 * - Maintains consistent layout at the bottom of the application
 */
export default function NavioFooter() {
  return (
    // Main footer container with top border and theme-based background
    <footer className="border-t border-[#E2E8F0] bg-white dark:border-[#334155] dark:bg-[#0F172A]">
      
      {/* Main grid layout for footer content */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        
        {/* SECTION 1: Branding + Description */}
        <div>
          
          {/* Logo + App Name */}
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0B5FFF] font-bold text-white">
              N
            </div>

            <div>
              <p className="font-bold text-[#0F172A] dark:text-white">Navio</p>
              <p className="text-sm text-[#475569] dark:text-slate-300">
                Campus indoor navigation made simple
              </p>
            </div>
          </div>

          {/* App Description */}
          <p className="max-w-sm text-sm leading-6 text-[#475569] dark:text-slate-300">
            Navio helps students identify reference points, search classrooms,
            save semester schedules, and prepare for guided indoor navigation.
          </p>
        </div>

        {/* SECTION 2: Quick Navigation Links */}
        <div>
          
          {/* Section Title */}
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0B5FFF] dark:text-blue-300">
            Quick Links
          </h3>

          {/* Navigation Links List */}
          <ul className="space-y-3 text-sm text-[#475569] dark:text-slate-300">
            
            {/* Home Page */}
            <li>
              <Link href="/" className="transition hover:text-[#0B5FFF] dark:hover:text-blue-300">
                Home
              </Link>
            </li>

            {/* Dashboard Page */}
            <li>
              <Link href="/dashboard" className="transition hover:text-[#0B5FFF] dark:hover:text-blue-300">
                Dashboard
              </Link>
            </li>

            {/* Search Room Page */}
            <li>
              <Link href="/search-room" className="transition hover:text-[#0B5FFF] dark:hover:text-blue-300">
                Search Room
              </Link>
            </li>

            {/* Scan Page */}
            <li>
              <Link href="/scan" className="transition hover:text-[#E11D48] dark:hover:text-red-300">
                Scan Reference Point
              </Link>
            </li>
          </ul>
        </div>

        {/* SECTION 3: Version Information */}
        <div>
          
          {/* Section Title */}
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#E11D48] dark:text-red-300">
            About This Version
          </h3>

          {/* Version Description */}
          <p className="text-sm leading-6 text-[#475569] dark:text-slate-300">
            This version focuses on QR-based reference point detection, room
            validation from Firebase, saved classroom lists, and route-ready flow
            for future pathfinding integration.
          </p>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      {/* Displays copyright information */}
      <div className="border-t border-[#E2E8F0] px-4 py-4 text-center text-sm text-[#475569] dark:border-[#334155] dark:text-slate-400">
        © 2026 Navio. Built for indoor campus navigation.
      </div>
    </footer>
  );
}