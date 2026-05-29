"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function RandomStringGenerator() {

  const [length, setLength] = useState(16);

  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const [results, setResults] = useState<string[]>([]);

  const generateStrings = () => {

    let chars = "";

    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+{}[]<>?/";

    if (!chars) return;

    const generated = Array.from({ length: 10 }, () => {

      let result = "";

      for (let i = 0; i < length; i++) {

        result += chars.charAt(
          Math.floor(Math.random() * chars.length)
        );
      }

      return result;
    });

    setResults(generated);
  };

  const copyText = async (value: string) => {

    await navigator.clipboard.writeText(value);

    alert("Copied!");
  };

  return (

    <ToolLayout
      title="Random String Generator"
      description="Generate secure random strings instantly online."
    >

      <div className="rounded-[32px] border border-zinc-200 bg-white/80 backdrop-blur p-8 shadow-sm">

        <div className="text-2xl font-bold text-zinc-900 mb-8">
          Generator Settings
        </div>


        <div>

          <div className="flex items-center justify-between mb-3">

            <div className="font-medium text-zinc-700">
              String Length
            </div>

            <div className="font-semibold text-violet-700">
              {length}
            </div>

          </div>


          <input
            type="range"
            min="4"
            max="128"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-violet-600"
          />

        </div>


        <div className="mt-10 grid md:grid-cols-2 gap-5">

          <label className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-5 cursor-pointer hover:border-violet-300 transition duration-200">

            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
              className="w-5 h-5 accent-violet-600"
            />

            <span className="font-medium text-zinc-800">
              Uppercase Letters
            </span>

          </label>


          <label className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-5 cursor-pointer hover:border-violet-300 transition duration-200">

            <input
              type="checkbox"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
              className="w-5 h-5 accent-violet-600"
            />

            <span className="font-medium text-zinc-800">
              Lowercase Letters
            </span>

          </label>


          <label className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-5 cursor-pointer hover:border-violet-300 transition duration-200">

            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
              className="w-5 h-5 accent-violet-600"
            />

            <span className="font-medium text-zinc-800">
              Numbers
            </span>

          </label>


          <label className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-5 cursor-pointer hover:border-violet-300 transition duration-200">

            <input
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
              className="w-5 h-5 accent-violet-600"
            />

            <span className="font-medium text-zinc-800">
              Symbols
            </span>

          </label>

        </div>


        <button
          onClick={generateStrings}
          className="mt-10 w-full py-5 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.01] transition duration-200 shadow-lg"
        >
          Generate Random Strings
        </button>

      </div>


      <div className="mt-14">

        <div className="text-3xl font-bold text-zinc-900 mb-8">
          Generated Strings
        </div>


        <div className="space-y-5">

          {results.length > 0 ? (

            results.map((item, index) => (

              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-[28px] border border-zinc-200 bg-gradient-to-r from-white to-violet-50/40 p-6 shadow-sm"
              >

                <div className="font-mono text-zinc-900 break-all">
                  {item}
                </div>


                <button
                  onClick={() => copyText(item)}
                  className="px-5 py-3 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200 shrink-0"
                >
                  Copy
                </button>

              </div>

            ))

          ) : (

            <div className="rounded-2xl border border-dashed border-zinc-300 bg-white/60 p-10 text-center text-zinc-500">
              No strings generated yet
            </div>

          )}

        </div>

      </div>

    </ToolLayout>
  );
}