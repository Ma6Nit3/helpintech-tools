"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function HashGenerator() {

  const [input, setInput] = useState("");

  const [hashes, setHashes] = useState({
    md5: "",
    sha1: "",
    sha256: "",
    sha512: "",
  });

  const generateHashes = async () => {

    if (!input) return;

    async function generateHash(
      algorithm: string,
      text: string
    ) {

      const encoder = new TextEncoder();

      const data = encoder.encode(text);

      const hashBuffer = await crypto.subtle.digest(
        algorithm,
        data
      );

      const hashArray = Array.from(new Uint8Array(hashBuffer));

      return hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    }

    const sha1 = await generateHash("SHA-1", input);
    const sha256 = await generateHash("SHA-256", input);
    const sha512 = await generateHash("SHA-512", input);

    setHashes({
      md5: "MD5 requires backend/library support",
      sha1,
      sha256,
      sha512,
    });
  };

  const copyHash = async (value: string) => {

    await navigator.clipboard.writeText(value);

    alert("Hash copied!");
  };

  return (

    <ToolLayout
      title="Hash Generator"
      description="Generate secure hashes instantly using SHA algorithms."
    >

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text here..."
        className="w-full h-56 bg-white/70 border border-zinc-200 rounded-[28px] p-6 outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200 resize-none"
      />


      <button
        onClick={generateHashes}
        className="mt-8 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.02] transition duration-200 shadow-lg"
      >
        Generate Hashes
      </button>


      <div className="mt-14 space-y-6">

        {Object.entries(hashes).map(([type, value]) => (

          <div
            key={type}
            className="rounded-[28px] border border-zinc-200 bg-gradient-to-b from-white to-violet-50/40 p-6 shadow-sm"
          >

            <div className="flex items-center justify-between mb-4">

              <div className="text-xl font-bold uppercase text-zinc-900">
                {type}
              </div>

              <button
                onClick={() => copyHash(value)}
                className="px-5 py-2 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200"
              >
                Copy
              </button>

            </div>


            <textarea
              value={value}
              readOnly
              className="w-full h-32 bg-white border border-zinc-200 rounded-2xl p-4 text-zinc-900 shadow-sm resize-none"
            />

          </div>

        ))}

      </div>

    </ToolLayout>
  );
}