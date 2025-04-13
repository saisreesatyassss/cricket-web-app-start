// app/login/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming this component is styled well
import { Footer } from "@/components/footer"; // Assuming you have this component

// Reminder: Keep this list updated based on current legal regulations for online gaming in India.
const legalGamingStates = [
  "Sikkim",
  "Goa",
  "Nagaland",
  "Meghalaya",
  "Daman and Diu",
  // "Telangana", // Example: Commented out or removed if restricted
];

export default function LoginPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 group">
            {/* Ensure the logo path is correct */}
            <Image
              src="/Logo.svg"
              alt="Cricket Panga Logo"
              width={120} // Slightly adjusted size
              height={50}
              className="h-9 w-auto" // Adjusted height
            />
            <span className="text-lg font-bold text-blue-700 group-hover:text-blue-600 transition-colors duration-200">
              Cricket Panga{" "}
              <span className="text-orange-500 text-xs font-medium align-super">
                India Edition
              </span>
            </span>
          </Link>
          <div className="hidden md:flex gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <main className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Increased max-width slightly for better spacing on larger screens */}
        <div className="w-full max-w-lg space-y-8 bg-white p-8 md:p-10 shadow-lg rounded-xl border border-gray-100">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Join <span className="text-blue-700">Cricket Panga</span>
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your details to get started. It's quick and easy!
            </p>
          </div>

          {/* Increased spacing in the form */}
          <form className="mt-8 space-y-6">
            <div className="space-y-5 rounded-md -space-y-px">
              {/* Input Field Wrapper */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g., Virat Kohli"
                  className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                />
              </div>

              {/* Input Field Wrapper */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}" // Basic pattern validation
                  title="Please enter a valid 10-digit phone number"
                  className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                />
              </div>

              {/* Input Field Wrapper */}
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Select Your State
                </label>
                <select
                  id="state"
                  name="state"
                  required
                  className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                >
                  <option value="" disabled selected>
                    -- Please Select --
                  </option>
                  {/* Ensure unique keys if duplicates exist (like Sikkim) */}
                  {/* Using index as key here for simplicity if state names can repeat */}
                  {legalGamingStates.map((state, index) => (
                    <option key={`${state}-${index}`} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                 <p className="mt-1.5 text-xs text-gray-500">
                    Only states where participation is permitted are listed.
                 </p>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start"> {/* Changed items-center to items-start for better alignment with multi-line text */}
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded transition duration-150 ease-in-out"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                    target="_blank" // Open terms in new tab
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions
                  </Link>{" "}
                   & confirm I am 18+ and reside in a permitted state.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition duration-150 ease-in-out shadow-sm"
                disabled={!agreed}
              >
                Continue to Play
              </Button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer /> {/* Assuming Footer component exists and is styled */}
    </div>
  );
}