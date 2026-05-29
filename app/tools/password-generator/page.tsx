"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function PasswordGenerator() {

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);

  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = () => {

    let chars = "";

    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+{}[]<>?/";

    if (!chars) {
      setPassword("Select at least one option");
      return;
    }

    let generated = "";

    for (let i = 0; i < length; i++) {
      generated += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(generated);
  };

  const copyPassword = async () => {

    await navigator.clipboard.writeText(password);

    alert("Password copied!");
  };

  const getStrength = () => {

    if (length < 8) return "Weak";
    if (length < 14) return "Medium";
    if (symbols && numbers && uppercase) return "Strong";

    return "Medium";
  };

  return (

    <ToolLayout
      title="Password Generator"
      description="Generate strong and secure passwords instantly online."
    >

      <div className="rounded-[28px] border border-zinc-200 bg-gradient-to-b from-white to-violet-50/40 p-8 shadow-sm">

        <div className="flex items-center justify-between mb-4">

          <div className="text-lg font-semibold text-zinc-900">
            Generated Password
          </div>

          <button
            onClick={copyPassword}
            className="px-5 py-2 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200"
          >
            Copy
          </button>

        </div>


        <textarea
          value={password}
          readOnly
          className="w-full h-32 bg-white/80 border border-zinc-200 rounded-2xl p-5 outline-none text-zinc-900 shadow-sm resize-none"
        />


        <div className="mt-5 flex items-center justify-between">

          <div className="text-zinc-600">
            Strength:
          </div>

          <div className="font-semibold text-violet-700">
            {getStrength()}
          </div>

        </div>

      </div>


      <div className="mt-12 rounded-[28px] border border-zinc-200 bg-white/80 backdrop-blur p-8 shadow-sm">

        <div className="text-2xl font-bold text-zinc-900 mb-8">
          Password Settings
        </div>


        <div>

          <div className="flex items-center justify-between mb-3">

            <div className="font-medium text-zinc-700">
              Password Length
            </div>

            <div className="font-semibold text-violet-700">
              {length}
            </div>

          </div>


          <input
            type="range"
            min="4"
            max="64"
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
          onClick={generatePassword}
          className="mt-10 w-full py-5 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.01] transition duration-200 shadow-lg"
        >
          Generate Password
        </button>

      </div>

    </ToolLayout>
  );
}