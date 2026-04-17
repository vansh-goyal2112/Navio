"use client"; // Enables client-side rendering

// Import reusable card component for each saved class
import SavedClassCard from "./SavedClassCard";

/**
 * SavedClassList Component
 * --------------------------------------------------
 * Purpose:
 * - Displays all saved classes in a horizontal scrollable list
 * - Handles empty state (no classes)
 * - Passes actions (select/delete) to each card
 */
export default function SavedClassList({ classes, onDeleteClass, onSelectClass }) {
  return (
    // Main container
    <div className="w-full">

      {/* HEADER SECTION */}
      {/* Displays title, description, and total count */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        
        {/* Left: Title + Description */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Saved Classes
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#475569] dark:text-slate-300">
            Select a saved class to continue to the QR scan flow or remove entries
            you no longer need.
          </p>
        </div>

        {/* Right: Total Count Box */}
        <div className="rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-sm text-[#475569] dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-slate-300">
          
          {/* Dynamic count of saved classes */}
          <span className="font-semibold text-[#0B5FFF] dark:text-blue-300">
            Total:
          </span>{" "}
          
          {/* Plural handling based on count */}
          {classes.length} saved class{classes.length === 1 ? "" : "es"}
        </div>
      </div>

      {/* CONDITIONAL RENDERING */}
      {/* If no classes → show empty state UI */}
      {classes.length === 0 ? (

        <div className="mx-auto max-w-2xl rounded-[28px] border border-[#E2E8F0] bg-white p-8 text-center shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
          
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl dark:bg-blue-500/10">
            📚
          </div>

          {/* Empty state title */}
          <h3 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            No saved classes yet
          </h3>

          {/* Empty state description */}
          <p className="mt-3 text-sm leading-6 text-[#475569] dark:text-slate-300">
            Add classroom entries to build your semester list and make your future
            navigation flow faster.
          </p>
        </div>

      ) : (

        // If classes exist → render scrollable list
        <div className="relative">
          
          {/* Horizontal scroll container */}
          <ul className="flex gap-5 overflow-x-auto scroll-smooth pb-4">
            
            {/* Map each class to a SavedClassCard */}
            {classes.map((classItem) => (
              <SavedClassCard
                key={classItem.id} // Unique key for React rendering

                classItem={classItem} // Pass class data

                // When card is clicked → select class
                onSelect={() => onSelectClass(classItem)}

                // When delete is clicked → remove class
                onDelete={() => onDeleteClass(classItem.id)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}