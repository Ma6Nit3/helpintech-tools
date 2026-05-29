"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function RegexTester() {

  const [regex, setRegex] = useState("");
  const [testText, setTestText] = useState("");
  const [matches, setMatches] = useState<string[]>([]);
  const [error, setError] = useState("");

  const testRegex = () => {

    try {

      const expression = new RegExp(regex, "g");

      const foundMatches = testText.match(expression);

      setMatches(foundMatches || []);

      setError("");

    } catch {

      setError("Invalid Regular Expression");

      setMatches([]);

    }
  };

  return (

    <ToolLayout
      title="Regex Tester"
      description="Test regular expressions instantly with live pattern matching."
    >

      <div className="grid lg:grid-cols-2 gap-8">

        <div>

          <div className="text-xl font-bold text-zinc-900 mb-4">
            Regular Expression
          </div>

          <input
            type="text"
            value={regex}
            onChange={(e) => setRegex(e.target.value)}
            placeholder="Enter regex pattern..."
            className="w-full px-5 py-4 rounded-2xl border border-zinc-200 bg-white outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200"
          />

        </div>


        <div>

          <div className="text-xl font-bold text-zinc-900 mb-4">
            Match Count
          </div>

          <div className="h-[58px] flex items-center px-5 rounded-2xl border border-zinc-200 bg-gradient-to-r from-violet-50 to-blue-50 text-violet-700 font-bold text-lg shadow-sm">
            {matches.length}
          </div>

        </div>

      </div>


      <div className="mt-10">

        <div className="text-xl font-bold text-zinc-900 mb-4">
          Test Text
        </div>

        <textarea
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          placeholder="Paste text here..."
          className="w-full h-72 bg-white/70 border border-zinc-200 rounded-[28px] p-6 outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200 resize-none"
        />

      </div>


      <button
        onClick={testRegex}
        className="mt-8 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.02] transition duration-200 shadow-lg"
      >
        Test Regex
      </button>


      {error && (

        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700 font-medium">
          {error}
        </div>

      )}


      <div className="mt-14">

        <h2 className="text-3xl font-bold text-zinc-900 mb-6">
          Matches
        </h2>


        <div className="space-y-4">

          {matches.length > 0 ? (

            matches.map((match, index) => (

              <div
                key={index}
                className="rounded-2xl border border-zinc-200 bg-gradient-to-r from-white to-violet-50/40 p-5 shadow-sm"
              >

                <div className="font-mono text-zinc-900 break-all">
                  {match}
                </div>

              </div>

            ))

          ) : (

            <div className="rounded-2xl border border-dashed border-zinc-300 bg-white/60 p-10 text-center text-zinc-500">
              No matches found
            </div>

          )}

        </div>

      </div>

    </ToolLayout>
  );
}