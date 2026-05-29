"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function TimestampConverter() {

  const [timestamp, setTimestamp] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [output, setOutput] = useState("");

  const convertTimestamp = () => {

    try {

      const date = new Date(Number(timestamp) * 1000);

      setOutput(date.toString());

    } catch {

      setOutput("Invalid timestamp");

    }
  };

  const convertDateToTimestamp = () => {

    try {

      const ts = Math.floor(new Date(dateValue).getTime() / 1000);

      setOutput(ts.toString());

    } catch {

      setOutput("Invalid date");

    }
  };

  const currentTimestamp = () => {

    const now = Math.floor(Date.now() / 1000);

    setTimestamp(now.toString());

    setOutput(new Date(now * 1000).toString());
  };

  const copyOutput = async () => {

    await navigator.clipboard.writeText(output);

    alert("Copied!");
  };

  return (

    <ToolLayout
      title="Unix Timestamp Converter"
      description="Convert Unix timestamps into readable dates instantly."
    >

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="rounded-[28px] border border-zinc-200 bg-white/80 backdrop-blur p-8 shadow-sm">

          <div className="text-2xl font-bold text-zinc-900 mb-6">
            Timestamp → Date
          </div>

          <input
            type="text"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            placeholder="Enter Unix timestamp..."
            className="w-full px-5 py-4 rounded-2xl border border-zinc-200 bg-white outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200"
          />

          <button
            onClick={convertTimestamp}
            className="mt-6 w-full py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.01] transition duration-200 shadow-lg"
          >
            Convert Timestamp
          </button>

        </div>


        <div className="rounded-[28px] border border-zinc-200 bg-white/80 backdrop-blur p-8 shadow-sm">

          <div className="text-2xl font-bold text-zinc-900 mb-6">
            Date → Timestamp
          </div>

          <input
            type="datetime-local"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-zinc-200 bg-white outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200"
          />

          <button
            onClick={convertDateToTimestamp}
            className="mt-6 w-full py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.01] transition duration-200 shadow-lg"
          >
            Convert Date
          </button>

        </div>

      </div>


      <div className="mt-10 flex flex-wrap gap-4">

        <button
          onClick={currentTimestamp}
          className="px-7 py-4 rounded-2xl border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 hover:border-violet-300 transition duration-200 font-semibold shadow-sm"
        >
          Current Timestamp
        </button>

        <button
          onClick={copyOutput}
          className="px-7 py-4 rounded-2xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition duration-200 shadow-lg"
        >
          Copy Output
        </button>

      </div>


      <div className="mt-14">

        <h2 className="text-3xl font-bold text-zinc-900 mb-5">
          Output
        </h2>

        <textarea
          value={output}
          readOnly
          className="w-full h-48 bg-gradient-to-b from-white to-violet-50/30 border border-zinc-200 rounded-[28px] p-6 text-zinc-900 shadow-sm resize-none"
        />

      </div>

    </ToolLayout>
  );
}