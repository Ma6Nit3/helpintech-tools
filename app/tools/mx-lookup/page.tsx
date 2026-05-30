"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function MXLookup() {
  const [domain, setDomain] = useState("");
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const lookupMX = async () => {
    try {
      setLoading(true);
      setError("");
      setRecords([]);

      const response = await fetch("/api/mx-lookup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Lookup failed");
        return;
      }

      setRecords(data.Answer || []);
    } catch {
      setError("Failed to lookup MX records");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="MX Lookup"
      description="Check mail exchange (MX) records for any domain."
    >
      <div className="space-y-6">

        <input
          type="text"
          placeholder="google.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="w-full p-4 border border-zinc-200 rounded-xl bg-white text-zinc-900"
        />

        <button
          onClick={lookupMX}
          className="px-6 py-3 rounded-xl bg-zinc-900 text-white"
        >
          {loading ? "Looking up..." : "Lookup MX"}
        </button>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
            {error}
          </div>
        )}

        {records.length > 0 && (
          <div className="p-6 rounded-xl border border-zinc-200 bg-white">

            <h3 className="font-bold text-lg mb-4">
              MX Records
            </h3>

            <div className="space-y-3">

              {records.map((record, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-zinc-50 border"
                >
                  {record.data}
                </div>
              ))}

            </div>

          </div>
        )}

      </div>
    </ToolLayout>
  );
}