"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { tools } from "@/data/tools";

export default function FeaturedTools() {
  const featured = tools.filter((tool) => tool.slug);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === featured.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [featured.length]);

  const tool = featured[current];

  return (
    <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>

      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xl font-bold">
              Featured Tool
            </div>

            <div className="text-zinc-500 text-sm mt-1">
              Discover powerful developer utilities
            </div>
          </div>

          <div className="text-green-400 text-sm">
            ● Live
          </div>
        </div>

        <Link
          href={`/tools/${tool.slug}`}
          className="block"
        >
          <div className="rounded-3xl border border-zinc-800 bg-black/40 p-10 hover:border-green-500/40 transition duration-300">
            <div className="text-7xl mb-6">
            </div>

            <div className="text-3xl font-bold mb-3">
              {tool.title}
            </div>

            <div className="text-zinc-400 text-lg leading-relaxed">
              {tool.description}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-green-400 font-medium">
              Launch Tool →
            </div>
          </div>
        </Link>

        <div className="flex gap-2 mt-8">
          {featured.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10 bg-green-400"
                  : "w-2 bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}