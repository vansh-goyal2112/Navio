"use client"; // Enables client-side rendering (needed for camera + browser APIs)

// React hooks for state, lifecycle, and persistent references
import { useEffect, useRef, useState } from "react";

// Router for page navigation
import { useRouter } from "next/navigation";

// Static QR → location mapping
import { places } from "../data/places";

// Global navigation context
import { useNavio } from "../contexts/NavioContext";

// Main QR Scanner + Map Component
export default function QRScannerMap() {

  // Controls whether scanner is ON or OFF
  const [scannerOn, setScannerOn] = useState(false);

  // Stores detected place after scanning QR
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Stores error messages (invalid QR, scanner issues)
  const [error, setError] = useState("");

  // Reference to QR scanner instance
  const readerRef = useRef(null);

  // Router instance for navigation
  const router = useRouter();

  // Context values for navigation flow
  const { setSelectedReferencePoint, selectedSavedClass, selectedRoom } = useNavio();

  // Starts QR scanner using camera
  const startScanner = async () => {
    setError(""); // Clear previous errors

    // Prevent execution on server
    if (typeof window === "undefined") return;

    // Dynamically import QR library
    const { Html5Qrcode } = await import("html5-qrcode");

    // Initialize scanner if not already created
    if (!readerRef.current) {
      readerRef.current = new Html5Qrcode("camera");
    }

    try {
      // Start scanning
      await readerRef.current.start(
        { facingMode: "environment" }, // Use back camera
        { fps: 10, qrbox: 250 }, // Scanner settings

        // Callback when QR is scanned
        async (decodedText) => {
          const trimmedText = decodedText.trim();

          // Match scanned value with places data
          const place = places[trimmedText];

          if (place) {
            // Valid QR → update state + context
            setSelectedPlace(place);
            setSelectedReferencePoint(place);

            // Stop scanner after success
            setScannerOn(false);
            await stopScanner();
          } else {
            // Invalid QR → show error
            console.error("Invalid QR code:", decodedText);
            setError(`Invalid QR code: ${decodedText}`);
          }
        }
      );
    } catch (err) {
      // Handle scanner errors
      console.error("Error starting QR code scanner:", err);
      setError("Could not start scanner.");
      setScannerOn(false);
    }
  };

  // Stops and clears scanner safely
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

  // Toggle scanner ON/OFF
  const toggleScanner = async () => {
    if (!scannerOn) {
      setScannerOn(true);
      await startScanner();
    } else {
      setScannerOn(false);
      await stopScanner();
    }
  };

  // Controls navigation after scanning
  const handleContinue = () => {
    if (!selectedPlace) return;

    // If destination already exists → go to route result
    if (selectedSavedClass || selectedRoom) {
      router.push("/route-result");
    } else {
      // Otherwise → go to search page
      router.push("/search-room");
    }
  };

  // Cleanup: stop scanner when component unmounts
  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  return (
    // Main UI layout
    <main className="space-y-8">

      {/* Header Section */}
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

          {/* Info box */}
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

      {/* Main grid layout */}
      <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6">

          {/* Floor plan section */}
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

                {/* Marker shown when location detected */}
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

          {/* Camera scanner container */}
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

          {/* Action buttons */}
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

          {/* Conditional UI: location detected */}
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

            // Instructions before scanning
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

          {/* Error display */}
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