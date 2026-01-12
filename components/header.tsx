"use client";

import Link from "next/link";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-[1576px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                fill="white"
              />
            </svg>
            <span className="text-xl font-semibold">Wander</span>
          </Link>

          {/* Center Search Bar - Desktop Only */}
          <div className="hidden lg:flex items-center">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-full px-6 py-3 flex items-center gap-6">
              <button className="flex items-center gap-2 hover:opacity-70 transition">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium">Wherever</span>
              </button>

              <div className="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>

              <button className="flex items-center gap-2 hover:opacity-70 transition">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    strokeWidth={2}
                  />
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} />
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} />
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2} />
                </svg>
                <span className="text-sm font-medium">Whenever</span>
              </button>

              <div className="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>

              <button className="flex items-center gap-2 hover:opacity-70 transition">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="text-sm font-medium">Whoever</span>
              </button>

              <button className="bg-black dark:bg-white text-white dark:text-black rounded-full p-3 hover:opacity-90 transition">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/listed"
              className="hidden lg:block text-sm font-medium hover:opacity-70 transition"
            >
              List on Wander
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full right-6 lg:right-12 mt-2 w-64 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl py-2">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <p className="text-sm font-semibold mb-1">
                Unlock access and rewards
              </p>
              <button className="w-full bg-black dark:bg-white text-white dark:text-black rounded-full px-6 py-2.5 text-sm font-medium hover:opacity-90 transition">
                Log in or sign up
              </button>
            </div>

            <div className="py-2">
              <Link
                href="/app"
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-900 transition text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download mobile app
              </Link>

              <Link
                href="/listed"
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-900 transition text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                List on Wander
              </Link>

              <Link
                href="/help"
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-900 transition text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Help center
              </Link>
            </div>

            {mounted && (
              <div className="border-t border-gray-200 dark:border-gray-800 pt-2 mt-2">
                <div className="px-4 py-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Theme
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTheme("light")}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition ${
                        theme === "light"
                          ? "bg-gray-100 dark:bg-gray-800"
                          : "hover:bg-gray-50 dark:hover:bg-gray-900"
                      }`}
                    >
                      <Sun className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition ${
                        theme === "dark"
                          ? "bg-gray-100 dark:bg-gray-800"
                          : "hover:bg-gray-50 dark:hover:bg-gray-900"
                      }`}
                    >
                      <Moon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setTheme("system")}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition ${
                        theme === "system"
                          ? "bg-gray-100 dark:bg-gray-800"
                          : "hover:bg-gray-50 dark:hover:bg-gray-900"
                      }`}
                    >
                      <Monitor className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
