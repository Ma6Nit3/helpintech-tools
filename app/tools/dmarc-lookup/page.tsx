"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function DMARCLookup() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const lookup = async () => {
    setError("");
    setResult(null);

    const response = await fetch("/api/dmarc-lookup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ domain }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      return;
    }

    setResult(data);
  };

  return (
    <ToolLayout
      title="DMARC Lookup"
      description="Lookup DMARC DNS records."
    >
      <div className="space-y-6">

        <input
          type="text"
          placeholder="example.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="w-full p-4 border rounded-xl"
        />

        <button
          onClick={lookup}
          className="px-6 py-3 bg-black text-white rounded-xl"
        >
          Lookup DMARC
        </button>

        {error && (
          <div className="text-red-600">
            {error}
          </div>
        )}

        {result && (
          <pre className="bg-zinc-100 p-4 rounded-xl overflow-auto">
            {JSON.stringify(result.records, null, 2)}
          </pre>
        )}

      </div>
    </ToolLayout>
  );
}