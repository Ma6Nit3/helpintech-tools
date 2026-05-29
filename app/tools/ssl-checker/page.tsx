"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function SSLChecker() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const checkSSL = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/ssl-checker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain }),
      });

      const data = await res.json();
      setResult(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="SSL Checker"
      description="Check SSL certificate details for any domain."
    >
      <div className="space-y-6">
        <input
          type="text"
          placeholder="google.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="w-full p-4 border rounded-xl"
        />

        <button
          onClick={checkSSL}
          className="px-6 py-3 bg-black text-white rounded-xl"
        >
          {loading ? "Checking..." : "Check SSL"}
        </button>

        {result && (
          <div className="border rounded-xl p-6 bg-zinc-50">
            <p><strong>Subject:</strong> {result.subject}</p>
            <p><strong>Issuer:</strong> {result.issuer}</p>
            <p><strong>Valid From:</strong> {result.validFrom}</p>
            <p><strong>Valid To:</strong> {result.validTo}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}