"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function IPLookup() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const lookupIP = async () => {
    try {
      setLoading(true);
      setError("");
      setResult(null);

      const response = await fetch("/api/ip-lookup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip }),
      });

      const data = await response.json();

if (!response.ok || data.error) {
  setError(data.error || "IP lookup failed");
  return;
}

      setResult(data);
    } catch {
      setError("Unable to lookup IP address");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="IP Lookup"
      description="Find location, ISP, ASN and network information for any IP address."
    >
      <div className="space-y-6">

        <input
          type="text"
          placeholder="8.8.8.8"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          className="w-full p-4 border border-zinc-200 rounded-xl bg-white text-zinc-900"
        />

        <button
          onClick={lookupIP}
          className="px-6 py-3 rounded-xl bg-zinc-900 text-white"
        >
          {loading ? "Looking up..." : "Lookup IP"}
        </button>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
            {error}
          </div>
        )}

{result && (
  <div className="p-6 rounded-xl border border-zinc-200 bg-white space-y-3">

    <p><strong>IP:</strong> {result.ip}</p>
    <p><strong>Hostname:</strong> {result.hostname || "N/A"}</p>
    <p><strong>City:</strong> {result.city}</p>
    <p><strong>Region:</strong> {result.region}</p>
    <p><strong>Country:</strong> {result.country}</p>
    <p><strong>Location:</strong> {result.loc}</p>
    <p><strong>Organization:</strong> {result.org}</p>
    <p><strong>Timezone:</strong> {result.timezone}</p>

  </div>
)}

      </div>
    </ToolLayout>
  );
}