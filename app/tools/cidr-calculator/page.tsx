"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function CIDRCalculatorPage() {
  const [cidr, setCidr] = useState("");
  const [result, setResult] = useState<any>(null);

  const ipToInt = (ip: string) => {
    return ip
      .split(".")
      .reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;
  };

  const intToIp = (int: number) => {
    return [
      (int >>> 24) & 255,
      (int >>> 16) & 255,
      (int >>> 8) & 255,
      int & 255,
    ].join(".");
  };

  const calculateCIDR = () => {
    try {
      const [ip, prefixStr] = cidr.trim().split("/");

      if (!ip || !prefixStr) {
        throw new Error();
      }

      const prefix = parseInt(prefixStr);

      if (prefix < 0 || prefix > 32) {
        throw new Error();
      }

      const mask =
        prefix === 0
          ? 0
          : ((0xffffffff << (32 - prefix)) >>> 0);

      const ipInt = ipToInt(ip);

      const network = ipInt & mask;
      const broadcast = network | (~mask >>> 0);

      const hosts =
        prefix >= 31
          ? 0
          : Math.pow(2, 32 - prefix) - 2;

      const subnetMask = intToIp(mask >>> 0);

      const wildcardMask = intToIp((~mask >>> 0) >>> 0);

      setResult({
        network: intToIp(network),
        broadcast: intToIp(broadcast),
        hosts,
        subnetMask,
        wildcardMask,
      });

    } catch {
      setResult({
        error: "Invalid CIDR format. Example: 192.168.1.0/24",
      });
    }
  };

  return (
    <ToolLayout
      title="CIDR Calculator"
      description="Calculate network information from CIDR notation."
    >
      <input
        type="text"
        value={cidr}
        onChange={(e) => setCidr(e.target.value)}
        placeholder="192.168.1.0/24"
        className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-zinc-900 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition"
      />

      <button
        onClick={calculateCIDR}
        className="mt-6 px-6 py-4 rounded-2xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-10">

          {result.error ? (

            <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">
              {result.error}
            </div>

          ) : (

            <div className="rounded-3xl border border-zinc-200 bg-white p-8 space-y-4">

              <div>
                <strong>Network Address:</strong>{" "}
                {result.network}
              </div>

              <div>
                <strong>Broadcast Address:</strong>{" "}
                {result.broadcast}
              </div>

              <div>
                <strong>Usable Hosts:</strong>{" "}
                {result.hosts}
              </div>

              <div>
                <strong>Subnet Mask:</strong>{" "}
                {result.subnetMask}
              </div>

              <div>
                <strong>Wildcard Mask:</strong>{" "}
                {result.wildcardMask}
              </div>

              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    JSON.stringify(result, null, 2)
                  )
                }
                className="mt-4 px-5 py-3 rounded-2xl border border-zinc-200 hover:bg-zinc-100 transition"
              >
                Copy Result
              </button>

            </div>

          )}

        </div>
      )}
    </ToolLayout>
  );
}