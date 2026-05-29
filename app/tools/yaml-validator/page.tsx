"use client";

import { useState } from "react";
import yaml from "js-yaml";
import ToolLayout from "@/components/tools/ToolLayout";

export default function YAMLValidator() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const validateYAML = () => {

    try {

      const parsed = yaml.load(input);

      const formatted = yaml.dump(parsed);

      setOutput(formatted);

      setError("");

    } catch (err: any) {

      setError(err.message);

      setOutput("");
    }
  };

  const copyOutput = async () => {

    await navigator.clipboard.writeText(output);

    alert("Copied!");
  };

  return (

    <ToolLayout
      title="YAML Validator"
      description="Validate and format YAML files instantly online."
    >

      <div className="grid lg:grid-cols-2 gap-8">

        <div>

          <div className="text-2xl font-bold text-zinc-900 mb-5">
            YAML Input
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste YAML here..."
            className="w-full h-[500px] bg-white/70 border border-zinc-200 rounded-[28px] p-6 outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200 resize-none font-mono"
          />

        </div>


        <div>

          <div className="flex items-center justify-between mb-5">

            <div className="text-2xl font-bold text-zinc-900">
              Formatted Output
            </div>

            <button
              onClick={copyOutput}
              className="px-5 py-3 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200"
            >
              Copy
            </button>

          </div>


          <textarea
            value={output}
            readOnly
            className="w-full h-[500px] bg-gradient-to-b from-white to-violet-50/30 border border-zinc-200 rounded-[28px] p-6 text-zinc-900 shadow-sm resize-none font-mono"
          />

        </div>

      </div>


      <button
        onClick={validateYAML}
        className="mt-10 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.02] transition duration-200 shadow-lg"
      >
        Validate YAML
      </button>


      {error && (

        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">

          <div className="font-bold mb-2">
            Validation Error
          </div>

          <div className="font-mono text-sm break-all">
            {error}
          </div>

        </div>

      )}

    </ToolLayout>
  );
}