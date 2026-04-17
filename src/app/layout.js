// Import global stylesheet for the entire application
import "./globals.css";

// Import context providers for global state management
import { AuthContextProvider } from "../contexts/AuthContext"; // Handles authentication state
import { NavioContextProvider } from "../contexts/NavioContext"; // Handles navigation-related shared state
import { ThemeContextProvider } from "../contexts/ThemeContext"; // Handles light/dark theme state

// Import shared layout components
import NavioHeader from "../components/NavioHeader"; // Top navigation/header
import NavioFooter from "../components/NavioFooter"; // Bottom footer

/**
 * Page Metadata
 * --------------------------------------------------
 * Defines default metadata for the application.
 * Used by Next.js for browser tab title and page description.
 */
export const metadata = {
  title: "Navio",
  description: "Indoor campus navigation made simple",
};

/**
 * RootLayout Component
 * --------------------------------------------------
 * Purpose:
 * - Wraps the entire application
 * - Applies global providers (theme, auth, navigation)
 * - Renders shared layout structure (header, page content, footer)
 * - Ensures consistent styling and state availability across all pages
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 
        Main body styles:
        - Light mode background/text
        - Dark mode background/text
        - Applied globally across the app
      */}
      <body className="bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0F172A] dark:text-white">
        
        {/* Theme provider wraps the whole app so all pages can access theme state */}
        <ThemeContextProvider>

          {/* Auth provider makes user authentication data available globally */}
          <AuthContextProvider>

            {/* Navio provider stores shared navigation flow data across pages */}
            <NavioContextProvider>

              {/* Main app shell layout */}
              <div className="flex min-h-screen flex-col">

                {/* Shared top header across all pages */}
                <NavioHeader />

                {/* Main content area */}
                <main className="flex-1">

                  {/* 
                    Content container:
                    - Centers page content
                    - Applies max width
                    - Adds responsive horizontal and vertical padding
                  */}
                  <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {children}
                  </div>
                </main>

                {/* Shared footer across all pages */}
                <NavioFooter />
              </div>

            </NavioContextProvider>
          </AuthContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}