"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function SecurityHeadersChecker() {
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState<any>(null);
  const [error, setError] = useState("");

  const checkHeaders = async () => {
    setError("");
    setHeaders(null);

    try {
      const response = await fetch("/api/security-headers", {
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
    } catch {
      setError("Unable to check headers");
    }
  };

  const importantHeaders = [
    "strict-transport-security",
    "content-security-policy",
    "x-frame-options",
    "x-content-type-options",
    "referrer-policy",
    "permissions-policy",
  ];

  return (
    <ToolLayout
      title="Security Headers Checker"
      description="Check website security headers and identify missing protections."
    >
      <div className="space-y-6">

  <input
    type="text"
    placeholder="https://example.com"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    className="w-full p-4 border border-zinc-200 rounded-xl bg-white text-zinc-900"
  />

  <button
    onClick={checkHeaders}
    className="px-6 py-3 rounded-xl bg-zinc-900 text-white"
  >
    Check Headers
  </button>

  {error && (
    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
      {error}
    </div>
  )}

  {headers && (
    <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">

      <table className="w-full text-left">
        <thead className="bg-zinc-100">
          <tr>
            <th className="p-4">Header</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {importantHeaders.map((header) => (
            <tr
              key={header}
              className="border-t border-zinc-200"
            >
              <td className="p-4 font-mono">
                {header}
              </td>

              <td className="p-4">
                {headers[header] ? (
                  <span className="text-green-600 font-medium">
                    Present
                  </span>
                ) : (
                  <span className="text-red-600 font-medium">
                    Missing
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )}

</div>
    </ToolLayout>
  );
}