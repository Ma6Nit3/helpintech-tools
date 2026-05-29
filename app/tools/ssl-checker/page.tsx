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
    } catch {
      alert("Failed to fetch SSL details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="SSL Certificate Checker"
      description="Check SSL certificate validity, issuer, and expiration date."
    >
      <div className="space-y-6">

        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="example.com"
          className="w-full p-4 rounded-2xl border border-zinc-200"
        />

        <button
          onClick={checkSSL}
          className="px-6 py-3 rounded-2xl bg-violet-600 text-white"
        >
          {loading ? "Checking..." : "Check SSL"}
        </button>

        {result && !result.error && (
          <div className="rounded-3xl border border-zinc-200 p-6 bg-white">

            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <strong>Valid:</strong>{" "}
                {result.valid ? "Yes" : "No"}
              </div>

              <div>
                <strong>Days Remaining:</strong>{" "}
                {result.daysRemaining}
              </div>

              <div>
                <strong>Valid From:</strong>{" "}
                {result.validFrom}
              </div>

              <div>
                <strong>Valid To:</strong>{" "}
                {result.validTo}
              </div>

              <div>
                <strong>Issuer:</strong>{" "}
                {result.issuer}
              </div>

            </div>

          </div>
        )}

        {result?.error && (
          <div className="text-red-600">
            {result.error}
          </div>
        )}

      </div>
    </ToolLayout>
  );
}