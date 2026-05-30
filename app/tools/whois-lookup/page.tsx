"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function WhoisLookup() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const lookupWhois = async () => {
    try {
      setLoading(true);
      setError("");
      setResult(null);

      const response = await fetch("/api/whois", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          domain,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Lookup failed");
        return;
      }

      setResult(data);
    } catch {
      setError("Unable to perform WHOIS lookup");
    } finally {
      setLoading(false);
    }
  };

  const getEvent = (name: string) => {
    return result?.events?.find(
      (event: any) => event.eventAction === name
    )?.eventDate;
  };

  return (
    <ToolLayout
      title="WHOIS Lookup"
      description="Lookup domain registration and ownership information."
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
          onClick={lookupWhois}
          className="px-6 py-3 rounded-xl bg-zinc-900 text-white"
        >
          {loading ? "Searching..." : "Lookup WHOIS"}
        </button>

        {error && (
          <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-700">
            {error}
          </div>
        )}

        {result && (
          <div className="bg-white border border-zinc-200 rounded-xl p-6 space-y-4">

            <p>
              <strong>Domain:</strong>{" "}
              {result.ldhName}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {result.status?.join(", ") || "N/A"}
            </p>

            <p>
              <strong>Created:</strong>{" "}
              {getEvent("registration") || "N/A"}
            </p>

            <p>
              <strong>Updated:</strong>{" "}
              {getEvent("last changed") || "N/A"}
            </p>

            <p>
              <strong>Expiry:</strong>{" "}
              {getEvent("expiration") || "N/A"}
            </p>

            <div>
              <strong>Name Servers:</strong>

              <ul className="mt-2 list-disc list-inside">
                {result.nameservers?.map(
                  (ns: any, index: number) => (
                    <li key={index}>
                      {ns.ldhName}
                    </li>
                  )
                )}
              </ul>
            </div>

          </div>
        )}

      </div>
    </ToolLayout>
  );
}