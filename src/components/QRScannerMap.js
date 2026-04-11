// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import { places } from "@/data/places";

// // export default function QRScannerMap() {
// //   const [scannerOn, setScannerOn] = useState(false);
// //   const [selectedPlace, setSelectedPlace] = useState(null);
// //   const [error, setError] = useState("");
// //   const readerRef = useRef(null);

// //   const startScanner = async () => {
// //     setError("");

// //     if (typeof window === "undefined") return;

// //     const { Html5Qrcode } = await import("html5-qrcode");

// //     if (!readerRef.current) {
// //       readerRef.current = new Html5Qrcode("camera");
// //     }

// //     try {
// //       await readerRef.current.start(
// //         { facingMode: "environment" },
// //         { fps: 10, qrbox: 250 },
// //         (decodedText) => {
// //           const trimmedText = decodedText.trim();
// //           const place = places[trimmedText];

// //           if (place) {
// //             setSelectedPlace(place);
// //             setScannerOn(false);
// //             stopScanner();
// //           } else {
// //             console.error("Invalid QR code:", decodedText);
// //             setError(`Invalid QR code: ${decodedText}`);
// //           }
// //         }
// //       );
// //     } catch (err) {
// //       console.error("Error starting QR code scanner:", err);
// //       setError("Could not start scanner.");
// //       setScannerOn(false);
// //     }
// //   };

// //   const stopScanner = async () => {
// //     try {
// //       if (readerRef.current?.isScanning) {
// //         await readerRef.current.stop();
// //         await readerRef.current.clear();
// //       }
// //     } catch (err) {
// //       console.error("Error stopping scanner:", err);
// //     }
// //   };

// //   const toggleScanner = async () => {
// //     if (!scannerOn) {
// //       setScannerOn(true);
// //       await startScanner();
// //     } else {
// //       setScannerOn(false);
// //       await stopScanner();
// //     }
// //   };

// //   useEffect(() => {
// //     return () => {
// //       stopScanner();
// //     };
// //   }, []);

// //   return (
// //     <div className="flex min-h-screen flex-col items-center gap-6 bg-white px-4 py-8">
// //       <h1 className="text-3xl font-bold">QR Code Scanner</h1>

// //       <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-300 shadow-lg">
// //         <img
// //           src="/image/testplan.jpeg"
// //           alt="Indoor map"
// //           className="h-auto w-full object-contain"
// //         />

// //         {selectedPlace && (
// //           <div
// //             className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-red-600 shadow-md"
// //             style={{
// //               top: `${selectedPlace.top * 100}%`,
// //               left: `${selectedPlace.left * 100}%`,
// //             }}
// //             title={selectedPlace.info}
// //           />
// //         )}
// //       </div>

// //       {selectedPlace && (
// //         <div className="rounded-xl bg-gray-100 px-4 py-3 text-center shadow-sm">
// //           <p className="text-lg font-semibold">{selectedPlace.info}</p>
// //           <p className="text-sm text-gray-600">
// //             Top: {selectedPlace.top}, Left: {selectedPlace.left}
// //           </p>
// //         </div>
// //       )}

// //       <div
// //         id="camera"
// //         className={`w-full max-w-md overflow-hidden rounded-2xl border border-gray-300 ${
// //           scannerOn ? "block" : "hidden"
// //         }`}
// //       />

// //       <button
// //         onClick={toggleScanner}
// //         className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
// //       >
// //         {scannerOn ? "Cancel" : "Scan"}
// //       </button>

// //       {error && (
// //         <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
// //           {error}
// //         </p>
// //       )}
// //     </div>
// //   );
// // }



// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import { places } from "../data/places";
// import { useNavio } from "../contexts/NavioContext";

// export default function QRScannerMap() {
//   const [scannerOn, setScannerOn] = useState(false);
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [error, setError] = useState("");
//   const readerRef = useRef(null);

//   const router = useRouter();
//   const { setSelectedReferencePoint, selectedSavedClass, selectedRoom } = useNavio();

//   const startScanner = async () => {
//     setError("");

//     if (typeof window === "undefined") return;

//     const { Html5Qrcode } = await import("html5-qrcode");

//     if (!readerRef.current) {
//       readerRef.current = new Html5Qrcode("camera");
//     }

//     try {
//       await readerRef.current.start(
//         { facingMode: "environment" },
//         { fps: 10, qrbox: 250 },
//         async (decodedText) => {
//           const trimmedText = decodedText.trim();
//           const place = places[trimmedText];

//           if (place) {
//             setSelectedPlace(place);
//             setSelectedReferencePoint(place);
//             setScannerOn(false);
//             await stopScanner();
//           } else {
//             console.error("Invalid QR code:", decodedText);
//             setError(`Invalid QR code: ${decodedText}`);
//           }
//         }
//       );
//     } catch (err) {
//       console.error("Error starting QR code scanner:", err);
//       setError("Could not start scanner.");
//       setScannerOn(false);
//     }
//   };

//   const stopScanner = async () => {
//     try {
//       if (readerRef.current?.isScanning) {
//         await readerRef.current.stop();
//         await readerRef.current.clear();
//       }
//     } catch (err) {
//       console.error("Error stopping scanner:", err);
//     }
//   };

//   const toggleScanner = async () => {
//     if (!scannerOn) {
//       setScannerOn(true);
//       await startScanner();
//     } else {
//       setScannerOn(false);
//       await stopScanner();
//     }
//   };

//   const handleContinue = () => {
//     if (!selectedPlace) return;

//     if (selectedSavedClass || selectedRoom) {
//       router.push("/route-result");
//     } else {
//       router.push("/search-room");
//     }
//   };

//   useEffect(() => {
//     return () => {
//       stopScanner();
//     };
//   }, []);

//   return (
//     <div className="flex min-h-screen flex-col items-center gap-6 bg-white px-4 py-8 dark:bg-slate-800 dark:text-white">
//       <h1 className="text-3xl font-bold text-center">QR Code Scanner</h1>

//       <p className="max-w-2xl text-center text-sm sm:text-base text-slate-600 dark:text-slate-300">
//         Scan your Navio reference point QR code to identify your current location
//         on the floor plan.
//       </p>

//       <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-300 shadow-lg dark:border-slate-600">
//         <img
//           src="/image/testplan.jpeg"
//           alt="Indoor map"
//           className="h-auto w-full object-contain"
//         />

//         {selectedPlace && (
//           <div
//             className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-red-600 shadow-md"
//             style={{
//               top: `${selectedPlace.top * 100}%`,
//               left: `${selectedPlace.left * 100}%`,
//             }}
//             title={selectedPlace.info}
//           />
//         )}
//       </div>

//       {selectedPlace && (
//         <div className="rounded-xl bg-gray-100 px-4 py-3 text-center shadow-sm dark:bg-slate-700">
//           <p className="text-lg font-semibold">{selectedPlace.info}</p>
//           <p className="text-sm text-gray-600 dark:text-slate-300">
//             Reference point detected successfully.
//           </p>
//         </div>
//       )}

//       <div
//         id="camera"
//         className={`w-full max-w-md overflow-hidden rounded-2xl border border-gray-300 dark:border-slate-600 ${
//           scannerOn ? "block" : "hidden"
//         }`}
//       />

//       <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
//         <button
//           onClick={toggleScanner}
//           className="w-full rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90 dark:bg-teal-600 dark:hover:bg-teal-500"
//         >
//           {scannerOn ? "Cancel" : "Scan"}
//         </button>

//         <button
//           onClick={handleContinue}
//           disabled={!selectedPlace}
//           className="w-full rounded-xl bg-pink-600 px-6 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
//         >
//           Continue
//         </button>
//       </div>

//       {error && (
//         <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-300">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { places } from "../data/places";
import { useNavio } from "../contexts/NavioContext";

export default function QRScannerMap() {
  const [scannerOn, setScannerOn] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [error, setError] = useState("");
  const readerRef = useRef(null);

  const router = useRouter();
  const { setSelectedReferencePoint, selectedSavedClass, selectedRoom } = useNavio();

  const startScanner = async () => {
    setError("");

    if (typeof window === "undefined") return;

    const { Html5Qrcode } = await import("html5-qrcode");

    if (!readerRef.current) {
      readerRef.current = new Html5Qrcode("camera");
    }

    try {
      await readerRef.current.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        async (decodedText) => {
          const trimmedText = decodedText.trim();
          const place = places[trimmedText];

          if (place) {
            setSelectedPlace(place);
            setSelectedReferencePoint(place);
            setScannerOn(false);
            await stopScanner();
          } else {
            console.error("Invalid QR code:", decodedText);
            setError(`Invalid QR code: ${decodedText}`);
          }
        }
      );
    } catch (err) {
      console.error("Error starting QR code scanner:", err);
      setError("Could not start scanner.");
      setScannerOn(false);
    }
  };

  const stopScanner = async () => {
    try {
      if (readerRef.current?.isScanning) {
        await readerRef.current.stop();
        await readerRef.current.clear();
      }
    } catch (err) {
      console.error("Error stopping scanner:", err);
    }
  };

  const toggleScanner = async () => {
    if (!scannerOn) {
      setScannerOn(true);
      await startScanner();
    } else {
      setScannerOn(false);
      await stopScanner();
    }
  };

  const handleContinue = () => {
    if (!selectedPlace) return;

    if (selectedSavedClass || selectedRoom) {
      router.push("/route-result");
    } else {
      router.push("/search-room");
    }
  };

  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  return (
    <main className="space-y-8">
      <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-block rounded-full bg-red-50 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#E11D48] dark:bg-red-500/10 dark:text-red-300">
              QR SCAN
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Scan Reference Point
            </h1>

            <p className="mt-3 max-w-2xl text-[#475569] dark:text-slate-300">
              Scan your Navio reference point QR code to identify your current
              location on the floor plan before continuing to the next step.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4 dark:border-blue-400/20 dark:bg-blue-500/10">
            <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
              Scanner flow
            </p>
            <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
              Scan first, confirm location, then continue.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
            <div className="border-b border-[#E2E8F0] px-6 py-4 dark:border-[#334155]">
              <h2 className="text-xl font-bold tracking-tight">Floor Plan</h2>
              <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                Your detected reference point will appear on the map.
              </p>
            </div>

            <div className="relative bg-[#F8FAFC] p-4 dark:bg-[#0F172A]">
              <div className="relative w-full overflow-hidden rounded-2xl border border-[#E2E8F0] shadow-inner dark:border-[#334155]">
                <img
                  src="/image/testplan.jpeg"
                  alt="Indoor map"
                  className="h-auto w-full object-contain"
                />

                {selectedPlace && (
                  <div
                    className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#E11D48] shadow-[0_0_0_6px_rgba(225,29,72,0.18)]"
                    style={{
                      top: `${selectedPlace.top * 100}%`,
                      left: `${selectedPlace.left * 100}%`,
                    }}
                    title={selectedPlace.info}
                  />
                )}
              </div>
            </div>
          </div>

          <div
            id="camera"
            className={`overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-lg dark:border-[#334155] dark:bg-[#1E293B] ${
              scannerOn ? "block" : "hidden"
            }`}
          >
            <div className="border-b border-[#E2E8F0] px-6 py-4 dark:border-[#334155]">
              <h2 className="text-xl font-bold tracking-tight">Camera Scanner</h2>
              <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                Point your camera at the QR code.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={toggleScanner}
              className="w-full rounded-2xl bg-[#0B5FFF] px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:opacity-90"
            >
              {scannerOn ? "Cancel Scan" : "Start Scan"}
            </button>

            <button
              onClick={handleContinue}
              disabled={!selectedPlace}
              className="w-full rounded-2xl bg-[#E11D48] px-6 py-3 font-semibold text-white shadow-md shadow-red-500/20 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {selectedPlace ? (
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-xl dark:bg-red-500/10">
                  📍
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Location Detected</h2>
                  <p className="text-sm text-[#475569] dark:text-slate-300">
                    Reference point identified successfully
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 dark:border-[#334155] dark:bg-[#0F172A]">
                <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                  Reference Point
                </p>
                <p className="mt-2 text-lg font-semibold text-[#0F172A] dark:text-white">
                  {selectedPlace.info}
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#1E293B]">
              <h2 className="text-xl font-bold tracking-tight">Before you scan</h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    1. Open the scanner
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    Tap the scan button to activate the camera.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-500/10">
                  <p className="text-sm font-semibold text-[#0B5FFF] dark:text-blue-300">
                    2. Scan the QR code
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    Position the QR code clearly in front of the camera.
                  </p>
                </div>

                <div className="rounded-2xl border border-red-100 bg-red-50/70 p-4 dark:border-red-400/20 dark:bg-red-500/10">
                  <p className="text-sm font-semibold text-[#E11D48] dark:text-red-300">
                    3. Continue the flow
                  </p>
                  <p className="mt-1 text-sm text-[#475569] dark:text-slate-300">
                    Once detected, continue to room search or route result.
                  </p>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-[28px] border border-red-200 bg-red-50 p-6 shadow-lg dark:border-red-500/20 dark:bg-red-500/10">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl shadow-sm dark:bg-[#1E293B]">
                  ⚠️
                </div>
                <div>
                  <p className="text-lg font-bold text-[#E11D48] dark:text-red-300">
                    Scan Error
                  </p>
                  <p className="text-sm text-[#475569] dark:text-slate-300">
                    The QR code could not be processed.
                  </p>
                </div>
              </div>

              <p className="text-sm leading-6 text-red-700 dark:text-red-300">
                {error}
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}