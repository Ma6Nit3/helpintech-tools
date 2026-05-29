"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tools } from "@/data/tools";

export default function SearchTools() {
  const [query, setQuery] = useState("");

  const pathname = usePathname();
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredTools = tools.filter((tool) =>
    tool.title.toLowerCase().includes(query.toLowerCase())
  );

  // Close on route change
  useEffect(() => {
    setQuery("");
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setQuery("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Close on ESC key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setQuery("");
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={searchRef}
      className="relative"
    >
      <input
        type="text"
        placeholder="Search tools..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-72 px-5 py-3 rounded-2xl border border-zinc-200 bg-white/80 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200"
      />

      {query.trim().length > 0 && (
        <div className="absolute top-16 left-0 w-full rounded-3xl border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden z-50">

          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                onClick={() => setQuery("")}
                className="block px-5 py-4 hover:bg-violet-50 transition duration-200 border-b border-zinc-100 last:border-b-0"
              >
                <div className="font-semibold text-zinc-900">
                  {tool.title}
                </div>

                <div className="text-sm text-zinc-600 mt-1">
                  {tool.category}
                </div>
              </Link>
            ))
          ) : (
            <div className="px-5 py-4 text-zinc-500">
              No tools found
            </div>
          )}

        </div>
      )}
    </div>
  );
}