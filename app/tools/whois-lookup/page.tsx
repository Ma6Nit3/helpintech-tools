"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function WhoisLookup() {

  const [domain, setDomain] = useState("");

  const [result, setResult] = useState<{
    registrar: string;
    created: string;
    expires: string;
    status: string;
    nameservers: string[];
  } | null>(null);

  const lookupWhois = () => {

    if (!domain) return;

    setResult({
      registrar: "Cloudflare Registrar",
      created: "2021-08-12",
      expires: "2027-08-12",
      status: "clientTransferProhibited",
      nameservers: [
        "ns1.cloudflare.com",
        "ns2.cloudflare.com",
      ],
    });
  };

  const copyText = async (value: string) => {

    await navigator.clipboard.writeText(value);

    alert("Copied!");
  };

  return (

    <ToolLayout
      title="WHOIS Lookup"
      description="Lookup domain WHOIS information instantly online."
    >

      <div className="rounded-[32px] border border-zinc-200 bg-white/80 backdrop-blur p-8 shadow-sm">

        <div className="text-2xl font-bold text-zinc-900 mb-6">
          Domain WHOIS Lookup
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
            onClick={lookupWhois}
            className="px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.02] transition duration-200 shadow-lg"
          >
            Lookup WHOIS
          </button>

        </div>

      </div>


      {result ? (

        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <div className="rounded-[28px] border border-zinc-200 bg-gradient-to-r from-white to-violet-50/40 p-6 shadow-sm">

            <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              Registrar
            </div>

            <div className="mt-3 text-2xl font-bold text-zinc-900">
              {result.registrar}
            </div>

          </div>


          <div className="rounded-[28px] border border-zinc-200 bg-gradient-to-r from-white to-blue-50/40 p-6 shadow-sm">

            <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              Domain Status
            </div>

            <div className="mt-3 text-xl font-bold text-zinc-900 break-all">
              {result.status}
            </div>

          </div>


          <div className="rounded-[28px] border border-zinc-200 bg-gradient-to-r from-white to-violet-50/40 p-6 shadow-sm">

            <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              Created On
            </div>

            <div className="mt-3 text-2xl font-bold text-zinc-900">
              {result.created}
            </div>

          </div>


          <div className="rounded-[28px] border border-zinc-200 bg-gradient-to-r from-white to-blue-50/40 p-6 shadow-sm">

            <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              Expiry Date
            </div>

            <div className="mt-3 text-2xl font-bold text-zinc-900">
              {result.expires}
            </div>

          </div>


          <div className="rounded-[28px] border border-zinc-200 bg-gradient-to-r from-white to-violet-50/40 p-6 shadow-sm md:col-span-2">

            <div className="flex items-center justify-between">

              <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
                Name Servers
              </div>

              <button
                onClick={() =>
                  copyText(result.nameservers.join(", "))
                }
                className="px-5 py-2 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200"
              >
                Copy
              </button>

            </div>


            <div className="mt-5 space-y-3">

              {result.nameservers.map((ns, index) => (

                <div
                  key={index}
                  className="rounded-xl border border-zinc-200 bg-white p-4 font-mono text-zinc-900"
                >
                  {ns}
                </div>

              ))}

            </div>

          </div>

        </div>

      ) : (

        <div className="mt-14 rounded-2xl border border-dashed border-zinc-300 bg-white/60 p-10 text-center text-zinc-500">
          No WHOIS information found
        </div>

      )}

    </ToolLayout>
  );
}