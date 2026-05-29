"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function JwtDecoder() {
  const [token, setToken] = useState("");
  const [output, setOutput] = useState("");

  const decodeJwt = () => {
    try {
      const payload = token.split(".")[1];
      const decoded = atob(payload);
      setOutput(JSON.stringify(JSON.parse(decoded), null, 2));
    } catch {
      setOutput("Invalid JWT token");
    }
  };

  return (
    <ToolLayout
      title="JWT Decoder"
      description="Decode JWT tokens instantly and inspect payload data."
    >

      <textarea
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Paste JWT token here..."
        className="w-full h-72 bg-white/70 border border-zinc-200 rounded-[28px] p-6 outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200 resize-none"
      />


      <div className="flex flex-wrap gap-4 mt-8">

        <button
          onClick={decodeJwt}
          className="px-7 py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.02] transition duration-200 shadow-lg"
        >
          Decode JWT
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