// import "./globals.css";
// import { AuthContextProvider } from "../contexts/AuthContext";
// import { NavioContextProvider } from "../contexts/NavioContext";

// export const metadata = {
//   title: "Navio",
//   description: "Indoor campus navigation made simple",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <AuthContextProvider>
//           <NavioContextProvider>{children}</NavioContextProvider>
//         </AuthContextProvider>
//       </body>
//     </html>
//   );
// }



// import "./globals.css";
// import { AuthContextProvider } from "../contexts/AuthContext";
// import { NavioContextProvider } from "../contexts/NavioContext";
// import { ThemeContextProvider } from "../contexts/ThemeContext";

// export const metadata = {
//   title: "Navio",
//   description: "Indoor campus navigation made simple",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeContextProvider>
//           <AuthContextProvider>
//             <NavioContextProvider>{children}</NavioContextProvider>
//           </AuthContextProvider>
//         </ThemeContextProvider>
//       </body>
//     </html>
//   );
// }




import "./globals.css";
import { AuthContextProvider } from "../contexts/AuthContext";
import { NavioContextProvider } from "../contexts/NavioContext";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import NavioHeader from "../components/NavioHeader";
import NavioFooter from "../components/NavioFooter";

export const metadata = {
  title: "Navio",
  description: "Indoor campus navigation made simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0F172A] dark:text-white">
        <ThemeContextProvider>
          <AuthContextProvider>
            <NavioContextProvider>
              <div className="flex min-h-screen flex-col">
                <NavioHeader />
                <main className="flex-1">
                  <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {children}
                  </div>
                </main>
                <NavioFooter />
              </div>
            </NavioContextProvider>
          </AuthContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}