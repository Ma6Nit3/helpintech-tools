"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function UUIDGenerator() {

  const [uuids, setUuids] = useState<string[]>([]);

  const generateUUID = () => {

    const uuid = crypto.randomUUID();

    setUuids([uuid]);
  };

  const generateMultipleUUIDs = () => {

    const generated = Array.from({ length: 10 }, () =>
      crypto.randomUUID()
    );

    setUuids(generated);
  };

  const copyUUID = async (value: string) => {

    await navigator.clipboard.writeText(value);

    alert("UUID copied!");
  };

  return (

    <ToolLayout
      title="UUID Generator"
      description="Generate secure UUID v4 identifiers instantly online."
    >

      <div className="flex flex-wrap gap-4">

        <button
          onClick={generateUUID}
          className="px-7 py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.02] transition duration-200 shadow-lg"
        >
          Generate UUID
        </button>


        <button
          onClick={generateMultipleUUIDs}
          className="px-7 py-4 rounded-2xl border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 hover:border-violet-300 transition duration-200 font-semibold shadow-sm"
        >
          Generate 10 UUIDs
        </button>

      </div>


      <div className="mt-14">

        <h2 className="text-3xl font-bold text-zinc-900 mb-6">
          Generated UUIDs
        </h2>


        <div className="space-y-4">

          {uuids.length > 0 ? (

            uuids.map((uuid, index) => (

              <div
                key={index}
                className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-gradient-to-r from-white to-violet-50/40 p-5 shadow-sm"
              >

                <div className="font-mono text-zinc-900 break-all">
                  {uuid}
                </div>


                <button
                  onClick={() => copyUUID(uuid)}
                  className="px-5 py-2 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200 shrink-0"
                >
                  Copy
                </button>

              </div>

            ))

          ) : (

            <div className="rounded-2xl border border-dashed border-zinc-300 bg-white/60 p-10 text-center text-zinc-500">
              No UUIDs generated yet
            </div>

          )}

        </div>

      </div>

    </ToolLayout>

  );
}