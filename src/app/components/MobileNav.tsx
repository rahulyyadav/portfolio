"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navigation Button - Simplified */}
      <button
        className="md:hidden fixed top-8 left-8 z-50 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Mobile Navigation Menu - No background overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full p-8 flex flex-col">
          {/* Sidebar Buttons */}
          <div className="flex flex-col space-y-6">
            <Link
              href="/info"
              className="text-white text-xl hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Info
            </Link>
            <Link
              href="/resume"
              className="text-white text-xl hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
            <Link
              href="/university"
              className="text-white text-xl hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              University
            </Link>
            <Link
              href="/ideas"
              className="text-white text-xl hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ideas
            </Link>
            <Link
              href="/personal-life"
              className="text-white text-xl hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Personal Life
            </Link>
            <Link
              href="/address"
              className="text-white text-xl hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Address
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
