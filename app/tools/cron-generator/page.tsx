"use client";

import { useState } from "react";

export default function CronGeneratorPage() {
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [cron, setCron] = useState("");
  const [explanation, setExplanation] = useState("");

  const generateCron = () => {
    try {
      const input = time.trim().toUpperCase();

      const match = input.match(
        /^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?\s*(IST|UTC|EST|PST)?$/
      );

      if (!match) {
        setCron("Invalid format");
        setExplanation(
          "Example: 5 PM, 5:30 PM, 17:00"
        );
        return;
      }

      let hour = parseInt(match[1]);
      const minute = parseInt(match[2] || "0");
      const meridian = match[3];

      if (meridian === "PM" && hour !== 12) {
        hour += 12;
      }

      if (meridian === "AM" && hour === 12) {
        hour = 0;
      }

      let expression = "";

      switch (frequency) {
        case "daily":
          expression = `${minute} ${hour} * * *`;
          break;

        case "weekly":
          expression = `${minute} ${hour} * * 0`;
          break;

        case "monthly":
          expression = `${minute} ${hour} 1 * *`;
          break;

        default:
          expression = `${minute} ${hour} * * *`;
      }

      setCron(expression);

      setExplanation(
        `Runs ${frequency} at ${input}`
      );
    } catch {
      setCron("Unable to generate cron");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7ff] via-[#fafcff] to-[#eef4ff] py-20">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <div className="text-violet-600 font-semibold uppercase">
            Linux & DevOps
          </div>

          <h1 className="mt-4 text-5xl font-black text-zinc-950">
            Human Time To Cron Expression
          </h1>

<p className="mt-6 text-zinc-600">
  Convert human-readable times into cron expressions.
</p>

        </div>

        <div className="mt-12 rounded-[40px] bg-white border border-zinc-200 p-10 shadow-sm">

          <label className="block mb-3 font-semibold text-zinc-900">
            Time
          </label>

          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="5 PM or 17:00"
            className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-zinc-900 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition"
          />

          <div className="mt-8">

            <label className="block mb-3 font-semibold text-zinc-900">
              Frequency
            </label>

            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-zinc-900 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition"
            >
              <option value="daily">
                Daily
              </option>

              <option value="weekly">
                Weekly
              </option>

              <option value="monthly">
                Monthly
              </option>
            </select>

          </div>

          <button
            onClick={generateCron}
            className="mt-8 px-6 py-4 rounded-2xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition duration-200"
          >
            Generate Cron
          </button>

          {cron && (

            <div className="mt-10">

              <div className="font-semibold text-zinc-900 mb-3">
                Cron Expression
              </div>

              <div className="rounded-3xl bg-zinc-950 text-green-400 p-6 font-mono text-xl overflow-x-auto">
                {cron}
              </div>

              <div className="mt-4 text-zinc-600">
                {explanation}
              </div>

              <button
                onClick={() => navigator.clipboard.writeText(cron)}
                className="mt-6 px-5 py-3 rounded-2xl border border-zinc-200 hover:bg-zinc-100 transition"
              >
                Copy Expression
              </button>

            </div>

          )}

        </div>

      </div>

    </main>
  );
}