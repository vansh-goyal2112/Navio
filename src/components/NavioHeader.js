"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../contexts/ThemeContext";

export default function NavioHeader() {
  const pathname = usePathname();
  const { darkMode, toggleDarkMode } = useTheme();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/search-room", label: "Search Room" },
    { href: "/saved-classes", label: "Saved Classes" },
    { href: "/scan", label: "Scan" },
    { href: "/profile", label: "Profile" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-xl dark:border-[#334155] dark:bg-[#0F172A]/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B5FFF] text-lg font-bold text-white shadow-md shadow-blue-500/20">
              N
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight text-[#0F172A] dark:text-white">
                Navio
              </p>
              <p className="text-xs text-[#475569] dark:text-slate-300">
                Indoor campus navigation
              </p>
            </div>
          </Link>

          <button
            onClick={toggleDarkMode}
            className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:bg-[#F8FAFC] dark:border-[#334155] dark:bg-[#1E293B] dark:text-white dark:hover:bg-[#243244]"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <nav className="overflow-x-auto">
          <ul className="flex min-w-max items-center gap-2 pb-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`inline-flex rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#0B5FFF] text-white shadow-md shadow-blue-500/20"
                        : "text-[#475569] hover:bg-blue-50 hover:text-[#0B5FFF] dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}