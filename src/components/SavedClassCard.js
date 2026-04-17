"use client"; // Enables client-side rendering for this interactive component

/**
 * SavedClassCard Component
 * --------------------------------------------------
 * Purpose:
 * - Displays a single saved class as a card
 * - Allows user to:
 *    1. Select the class (for navigation flow)
 *    2. Delete the class
 * - Shows key class details (room, building, day, time)
 */
export default function SavedClassCard({ classItem, onDelete, onSelect }) {
  return (
    // Main card container
    // Clicking the card selects the class (navigation flow)
    <li
      onClick={() => onSelect(classItem)}
      className="group relative min-h-56 w-[260px] flex-shrink-0 snap-start cursor-pointer overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#334155] dark:bg-[#1E293B] sm:w-[280px] md:w-[300px]"
    >
      
      {/* HOVER BACKGROUND EFFECT */}
      {/* Decorative blurred gradient circles appear on hover */}
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-red-500/10 blur-2xl" />
      </div>

      {/* CONTENT WRAPPER */}
      {/* Positioned above hover effects */}
      <div className="relative z-10">

        {/* TOP SECTION: ICON + DELETE BUTTON */}
        <div className="mb-4 flex items-start justify-between gap-3">
          
          {/* Icon representing class */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-500/10">
            📚
          </div>

          {/* DELETE BUTTON */}
          {/* Stops propagation so it doesn't trigger card selection */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click (card select)
              onDelete(); // Trigger delete handler
            }}
            className="rounded-xl bg-[#E11D48] px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-red-500/20 transition hover:opacity-90"
          >
            ✕
          </button>
        </div>

        {/* ROOM NUMBER */}
        <h3 className="mb-2 break-words text-xl font-bold tracking-tight text-[#0F172A] transition group-hover:text-[#0B5FFF] dark:text-white dark:group-hover:text-blue-300">
          {classItem.roomNumber}
        </h3>

        {/* BUILDING NAME */}
        <p className="mb-4 break-words text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
          {classItem.building}
        </p>

        {/* DETAILS SECTION */}
        <div className="space-y-3">

          {/* DAY INFO */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 dark:border-[#334155] dark:bg-[#0F172A]">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0B5FFF] dark:text-blue-300">
              Day
            </p>
            <p className="mt-1 text-sm font-medium text-[#0F172A] dark:text-white">
              {classItem.day}
            </p>
          </div>

          {/* TIME INFO */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 dark:border-[#334155] dark:bg-[#0F172A]">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#E11D48] dark:text-red-300">
              Time
            </p>
            <p className="mt-1 break-words text-sm font-medium text-[#0F172A] dark:text-white">
              {classItem.time}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}