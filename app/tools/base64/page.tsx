"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";


export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encodeText = () => {
    try {
      setOutput(btoa(input));
    } catch {
      setOutput("Unable to encode text");
    }
  };

  const decodeText = () => {
    try {
      setOutput(atob(input));
    } catch {
      setOutput("Invalid Base64 string");
    }
  };

  return (
    <ToolLayout
      title="Base64 Encoder / Decoder"
      description="Encode or decode Base64 strings instantly online."
    >

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text here..."
        className="w-full h-72 bg-white/70 border border-zinc-200 rounded-[28px] p-6 outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200 resize-none"
      />


      <div className="flex flex-wrap gap-4 mt-8">

        <button
          onClick={encodeText}
          className="px-7 py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.02] transition duration-200 shadow-lg"
        >
          Encode
        </button>

        <button
          onClick={decodeText}
          className="px-7 py-4 rounded-2xl border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 hover:border-violet-300 transition duration-200 font-semibold shadow-sm"
        >
          Decode
        </button>

      </div>


      <div className="mt-14">

        <h2 className="text-3xl font-bold text-zinc-900 mb-5">
          Output
        </h2>

        <textarea
          value={output}
          readOnly
          className="w-full h-72 bg-gradient-to-b from-white to-violet-50/30 border border-zinc-200 rounded-[28px] p-6 text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200 resize-none"
        />

      </div>

    </ToolLayout>
  );
}