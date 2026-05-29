"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function DNSLookup() {

  const [domain, setDomain] = useState("");

  const [records, setRecords] = useState<
    {
      type: string;
      value: string;
    }[]
  >([]);

  const lookupDNS = async () => {

  if (!domain) return;

  try {

    const recordTypes = ["A", "MX", "TXT", "NS"];

    let allRecords: {
      type: string;
      value: string;
    }[] = [];

    for (const type of recordTypes) {

      const response = await fetch(
        `https://dns.google/resolve?name=${domain}&type=${type}`
      );

      const data = await response.json();

      if (data.Answer) {

        const formatted = data.Answer.map((item: any) => ({
          type,
          value: item.data,
        }));

        allRecords = [...allRecords, ...formatted];
      }
    }

    setRecords(allRecords);

  } catch {

    setRecords([
      {
        type: "ERROR",
        value: "Unable to fetch DNS records",
      },
    ]);
  }
};

  const copyValue = async (value: string) => {

    await navigator.clipboard.writeText(value);

    alert("Copied!");
  };

  return (

    <ToolLayout
      title="DNS Lookup"
      description="Lookup DNS records instantly for any domain."
    >

      <div className="rounded-[32px] border border-zinc-200 bg-white/80 backdrop-blur p-8 shadow-sm">

        <div className="text-2xl font-bold text-zinc-900 mb-6">
          Domain Lookup
        </div>


        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter domain name..."
            className="flex-1 px-5 py-4 rounded-2xl border border-zinc-200 bg-white outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200"
          />


          <button
            onClick={lookupDNS}
            className="px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.02] transition duration-200 shadow-lg"
          >
            Lookup DNS
          </button>

        </div>

      </div>


      <div className="mt-14">

        <h2 className="text-3xl font-bold text-zinc-900 mb-6">
          DNS Records
        </h2>


        <div className="space-y-5">

          {records.length > 0 ? (

            records.map((record, index) => (

              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-[28px] border border-zinc-200 bg-gradient-to-r from-white to-violet-50/40 p-6 shadow-sm"
              >

                <div>

                  <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
                    {record.type}
                  </div>

                  <div className="mt-2 font-mono text-zinc-900 break-all">
                    {record.value}
                  </div>

                </div>


                <button
                  onClick={() => copyValue(record.value)}
                  className="px-5 py-3 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200 shrink-0"
                >
                  Copy
                </button>

              </div>

            ))

          ) : (

            <div className="rounded-2xl border border-dashed border-zinc-300 bg-white/60 p-10 text-center text-zinc-500">
              No DNS records found
            </div>

          )}

        </div>

      </div>

    </ToolLayout>
  );
}