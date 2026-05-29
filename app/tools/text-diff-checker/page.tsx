"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function TextDiffChecker() {

  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");

  const leftLines = leftText.split("\n");
  const rightLines = rightText.split("\n");

  const maxLines = Math.max(
    leftLines.length,
    rightLines.length
  );

  const copyText = async (value: string) => {

    await navigator.clipboard.writeText(value);

    alert("Copied!");
  };

  return (

    <ToolLayout
      title="Text Diff Checker"
      description="Compare two text blocks and identify differences instantly."
    >

      <div className="grid lg:grid-cols-2 gap-8">

        <div>

          <div className="flex items-center justify-between mb-5">

            <div className="text-2xl font-bold text-zinc-900">
              Original Text
            </div>

            <button
              onClick={() => copyText(leftText)}
              className="px-5 py-3 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200"
            >
              Copy
            </button>

          </div>


          <textarea
            value={leftText}
            onChange={(e) => setLeftText(e.target.value)}
            placeholder="Paste original text..."
            className="w-full h-[500px] bg-white/70 border border-zinc-200 rounded-[28px] p-6 outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200 resize-none font-mono"
          />

        </div>


        <div>

          <div className="flex items-center justify-between mb-5">

            <div className="text-2xl font-bold text-zinc-900">
              Modified Text
            </div>

            <button
              onClick={() => copyText(rightText)}
              className="px-5 py-3 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200"
            >
              Copy
            </button>

          </div>


          <textarea
            value={rightText}
            onChange={(e) => setRightText(e.target.value)}
            placeholder="Paste modified text..."
            className="w-full h-[500px] bg-white/70 border border-zinc-200 rounded-[28px] p-6 outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200 resize-none font-mono"
          />

        </div>

      </div>


      <div className="mt-16">

        <div className="text-3xl font-bold text-zinc-900 mb-8">
          Differences
        </div>


        <div className="rounded-[32px] border border-zinc-200 bg-white/80 backdrop-blur overflow-hidden shadow-sm">

          <div className="grid grid-cols-2 border-b border-zinc-200 bg-gradient-to-r from-violet-50 to-blue-50">

            <div className="p-5 font-bold text-zinc-900 border-r border-zinc-200">
              Original
            </div>

            <div className="p-5 font-bold text-zinc-900">
              Modified
            </div>

          </div>


          <div>

            {Array.from({ length: maxLines }).map((_, index) => {

              const left = leftLines[index] || "";
              const right = rightLines[index] || "";

              const changed = left !== right;

              return (

                <div
                  key={index}
                  className="grid grid-cols-2 border-b border-zinc-100"
                >

                  <div
                    className={`p-4 border-r border-zinc-100 font-mono text-sm whitespace-pre-wrap break-all ${
                      changed
                        ? "bg-red-50 text-red-700"
                        : "bg-white text-zinc-900"
                    }`}
                  >
                    {left}
                  </div>


                  <div
                    className={`p-4 font-mono text-sm whitespace-pre-wrap break-all ${
                      changed
                        ? "bg-green-50 text-green-700"
                        : "bg-white text-zinc-900"
                    }`}
                  >
                    {right}
                  </div>

                </div>

              );
            })}

          </div>

        </div>

      </div>

    </ToolLayout>
  );
}