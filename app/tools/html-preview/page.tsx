"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function HTMLPreview() {

  const [html, setHtml] = useState(`<!DOCTYPE html>
<html>
<head>
  <title>HelpInTech</title>
</head>

<body style="font-family:sans-serif;padding:40px;">
  <h1>Hello from HelpInTech 🚀</h1>

  <p>
    Build powerful tools with modern UI.
  </p>

  <button>
    Click Me
  </button>
</body>
</html>`);

  const copyHTML = async () => {

    await navigator.clipboard.writeText(html);

    alert("HTML copied!");
  };

  return (

    <ToolLayout
      title="HTML Preview"
      description="Write and preview HTML instantly online."
    >

      <div className="grid lg:grid-cols-2 gap-8">

        <div>

          <div className="flex items-center justify-between mb-5">

            <div className="text-2xl font-bold text-zinc-900">
              HTML Editor
            </div>

            <button
              onClick={copyHTML}
              className="px-5 py-3 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200"
            >
              Copy
            </button>

          </div>


          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full h-[700px] bg-white/70 border border-zinc-200 rounded-[28px] p-6 outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200 resize-none font-mono"
          />

        </div>


        <div>

          <div className="text-2xl font-bold text-zinc-900 mb-5">
            Live Preview
          </div>


          <div className="h-[700px] overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm">

            <iframe
              srcDoc={html}
              title="HTML Preview"
              className="w-full h-full bg-white"
            />

          </div>

        </div>

      </div>

    </ToolLayout>
  );
}