"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function DKIMLookup() {
  const [domain, setDomain] = useState("");
  const [selector, setSelector] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const lookup = async () => {
    setError("");
    setResult(null);

    const response = await fetch("/api/dkim-lookup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        domain,
        selector,
      }),
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
      title="DKIM Lookup"
      description="Lookup DKIM records using selector and domain."
    >
      <div className="space-y-6">

        <input
          type="text"
          placeholder="Selector (default)"
          value={selector}
          onChange={(e) => setSelector(e.target.value)}
          className="w-full p-4 border rounded-xl"
        />

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
          Lookup DKIM
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