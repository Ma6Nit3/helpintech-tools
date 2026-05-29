"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function IPLookup() {

  const [ip, setIp] = useState("");

  const [result, setResult] = useState<{
    ip: string;
    country: string;
    city: string;
    isp: string;
    timezone: string;
  } | null>(null);

const lookupIP = async () => {

  if (!ip) return;

  try {

    const response = await fetch(
      `https://ipapi.co/${ip}/json/`
    );

    const data = await response.json();

    setResult({
      ip: data.ip || ip,
      country: data.country_name || "Unknown",
      city: data.city || "Unknown",
      isp: data.org || "Unknown",
      timezone: data.timezone || "Unknown",
    });

  } catch {

    setResult({
      ip,
      country: "Lookup Failed",
      city: "-",
      isp: "-",
      timezone: "-",
    });

  }

};

  const copyIP = async () => {

    if (!result) return;

    await navigator.clipboard.writeText(result.ip);

    alert("IP copied!");
  };

  return (

    <ToolLayout
      title="IP Lookup"
      description="Lookup IP address information instantly online."
    >

      <div className="rounded-[32px] border border-zinc-200 bg-white/80 backdrop-blur p-8 shadow-sm">

        <div className="text-2xl font-bold text-zinc-900 mb-6">
          IP Address Lookup
        </div>


        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Enter IP address..."
            className="flex-1 px-5 py-4 rounded-2xl border border-zinc-200 bg-white outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200"
          />


          <button
            onClick={lookupIP}
            className="px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.02] transition duration-200 shadow-lg"
          >
            Lookup IP
          </button>

        </div>

      </div>


      {result ? (

        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <div className="rounded-[28px] border border-zinc-200 bg-gradient-to-r from-white to-violet-50/40 p-6 shadow-sm">

            <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              IP Address
            </div>

            <div className="mt-3 font-mono text-2xl text-zinc-900 break-all">
              {result.ip}
            </div>

            <button
              onClick={copyIP}
              className="mt-5 px-5 py-3 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200"
            >
              Copy IP
            </button>

          </div>


          <div className="rounded-[28px] border border-zinc-200 bg-gradient-to-r from-white to-blue-50/40 p-6 shadow-sm">

            <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              Country
            </div>

            <div className="mt-3 text-2xl font-bold text-zinc-900">
              {result.country}
            </div>

          </div>


          <div className="rounded-[28px] border border-zinc-200 bg-gradient-to-r from-white to-violet-50/40 p-6 shadow-sm">

            <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              City
            </div>

            <div className="mt-3 text-2xl font-bold text-zinc-900">
              {result.city}
            </div>

          </div>


          <div className="rounded-[28px] border border-zinc-200 bg-gradient-to-r from-white to-blue-50/40 p-6 shadow-sm">

            <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              ISP
            </div>

            <div className="mt-3 text-2xl font-bold text-zinc-900">
              {result.isp}
            </div>

          </div>


          <div className="rounded-[28px] border border-zinc-200 bg-gradient-to-r from-white to-violet-50/40 p-6 shadow-sm md:col-span-2">

            <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              Timezone
            </div>

            <div className="mt-3 text-2xl font-bold text-zinc-900">
              {result.timezone}
            </div>

          </div>

        </div>

      ) : (

        <div className="mt-14 rounded-2xl border border-dashed border-zinc-300 bg-white/60 p-10 text-center text-zinc-500">
          No IP information found
        </div>

      )}

    </ToolLayout>
  );
}