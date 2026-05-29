"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import SearchTools from "./SearchTools";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <Image
              src="/icon.png"
              alt="HelpInTech"
              width={48}
              height={48}
              className="rounded-2xl shadow-lg"
            />

            <div>
              <div className="text-2xl font-black text-zinc-950">
                HelpInTech
              </div>

              <div className="text-sm text-zinc-500">
                Utilities Platform
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">

            <Link
              href="/"
              className="text-zinc-700 hover:text-violet-700 font-medium transition duration-200"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-zinc-700 hover:text-violet-700 font-medium transition duration-200"
            >
              About
            </Link>

            <div
              ref={dropdownRef}
              className="relative"
            >
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="text-zinc-700 hover:text-violet-700 font-medium transition duration-200 flex items-center gap-2"
              >
                Categories

                <span
                  className={`transition duration-200 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {showDropdown && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50">

                  <div className="rounded-3xl border border-zinc-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-4">

                    <div className="space-y-2">

                      <Link
                        href="/developer-tools"
                        onClick={() => setShowDropdown(false)}
                        className="block rounded-2xl p-4 hover:bg-violet-50 transition duration-200"
                      >
                        <div className="font-semibold text-zinc-900">
                          Developer Tools
                        </div>

                        <div className="text-sm text-zinc-500 mt-1">
                          JSON, Regex, Markdown, HTML and more
                        </div>
                      </Link>

                      <Link
                        href="/security-tools"
                        onClick={() => setShowDropdown(false)}
                        className="block rounded-2xl p-4 hover:bg-violet-50 transition duration-200"
                      >
                        <div className="font-semibold text-zinc-900">
                          Security Tools
                        </div>

                        <div className="text-sm text-zinc-500 mt-1">
                          JWT, Hashing, Passwords and more
                        </div>
                      </Link>

                      <Link
                        href="/networking-tools"
                        onClick={() => setShowDropdown(false)}
                        className="block rounded-2xl p-4 hover:bg-violet-50 transition duration-200"
                      >
                        <div className="font-semibold text-zinc-900">
                          Networking Tools
                        </div>

                        <div className="text-sm text-zinc-500 mt-1">
                          DNS, IP Lookup, WHOIS and more
                        </div>
                      </Link>

                      <Link
                        href="/linux-devops-tools"
                        onClick={() => setShowDropdown(false)}
                        className="block rounded-2xl p-4 hover:bg-violet-50 transition duration-200"
                      >
                        <div className="font-semibold text-zinc-900">
                          Linux & DevOps
                        </div>

                        <div className="text-sm text-zinc-500 mt-1">
                          YAML, Cron, Infrastructure utilities
                        </div>
                      </Link>

                    </div>

                  </div>

                </div>
              )}

            </div>

            <Link
              href="/tools"
              className="text-zinc-700 hover:text-violet-700 font-medium transition duration-200"
            >
              All Tools
            </Link>

          </nav>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden px-4 py-3 rounded-2xl border border-zinc-200 bg-white text-zinc-900 shadow-sm hover:bg-zinc-100 transition duration-200"
          >
            Menu
          </button>

          <div className="hidden lg:flex items-center gap-4">

            <SearchTools />

            <Link
              href="/tools"
              className="px-5 py-3 rounded-2xl bg-zinc-950 text-white font-medium hover:bg-zinc-800 transition duration-200"
            >
              Browse Tools
            </Link>

          </div>

        </div>
      </div>

      {mobileMenu && (
        <div className="lg:hidden border-t border-zinc-200 bg-white">

          <div className="px-6 py-6 space-y-3">

            <Link
              href="/"
              className="block rounded-2xl p-4 hover:bg-violet-50 transition duration-200"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="block rounded-2xl p-4 hover:bg-violet-50 transition duration-200"
            >
              About
            </Link>

            <Link
              href="/tools"
              className="block rounded-2xl p-4 hover:bg-violet-50 transition duration-200"
            >
              All Tools
            </Link>

            <Link
              href="/developer-tools"
              className="block rounded-2xl p-4 hover:bg-violet-50 transition duration-200"
            >
              Developer Tools
            </Link>

            <Link
              href="/security-tools"
              className="block rounded-2xl p-4 hover:bg-violet-50 transition duration-200"
            >
              Security Tools
            </Link>

            <Link
              href="/networking-tools"
              className="block rounded-2xl p-4 hover:bg-violet-50 transition duration-200"
            >
              Networking Tools
            </Link>

            <Link
              href="/linux-devops-tools"
              className="block rounded-2xl p-4 hover:bg-violet-50 transition duration-200"
            >
              Linux & DevOps Tools
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}