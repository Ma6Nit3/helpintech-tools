"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function HTTPHeaderViewer() {
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState<any>(null);
  const [error, setError] = useState("");

  const lookup = async () => {
    setError("");
    setHeaders(null);

    const response = await fetch("/api/http-headers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      return;
    }

    setHeaders(data.headers);
  };

  return (
    <ToolLayout
      title="HTTP Header Viewer"
      description="View all HTTP response headers."
    >
      <div className="space-y-6">

        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-4 border rounded-xl"
        />

        <button
          onClick={lookup}
          className="px-6 py-3 bg-black text-white rounded-xl"
        >
          View Headers
        </button>

        {error && (
          <div className="text-red-600">
            {error}
          </div>
        )}

        {headers && (
          <pre className="bg-zinc-100 p-4 rounded-xl overflow-auto text-sm">
            {JSON.stringify(headers, null, 2)}
          </pre>
        )}

      </div>
    </ToolLayout>
  );
}