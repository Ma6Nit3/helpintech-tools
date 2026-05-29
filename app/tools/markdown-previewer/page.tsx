"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ToolLayout from "@/components/tools/ToolLayout";

export default function MarkdownPreviewer() {

  const [markdown, setMarkdown] = useState(`# HelpInTech

## Markdown Previewer

This is a **live markdown previewer**.

### Features

- Live Preview
- GitHub Style Markdown
- Fast Rendering
- Developer Friendly

\`\`\`bash
npm run dev
\`\`\`

> Build modern tools with HelpInTech.
`);

  const copyMarkdown = async () => {

    await navigator.clipboard.writeText(markdown);

    alert("Markdown copied!");
  };

  return (

    <ToolLayout
      title="Markdown Previewer"
      description="Write and preview Markdown instantly online."
    >

      <div className="grid lg:grid-cols-2 gap-8">

        <div>

          <div className="flex items-center justify-between mb-5">

            <div className="text-2xl font-bold text-zinc-900">
              Markdown Editor
            </div>

            <button
              onClick={copyMarkdown}
              className="px-5 py-3 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200"
            >
              Copy
            </button>

          </div>


          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full h-[700px] bg-white/70 border border-zinc-200 rounded-[28px] p-6 outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200 resize-none font-mono"
          />

        </div>


        <div>

          <div className="text-2xl font-bold text-zinc-900 mb-5">
            Live Preview
          </div>


          <div className="h-[700px] overflow-auto rounded-[28px] border border-zinc-200 bg-gradient-to-b from-white to-violet-50/30 p-8 shadow-sm">

            <article className="prose prose-zinc max-w-none">

              <ReactMarkdown>
                {markdown}
              </ReactMarkdown>

            </article>

          </div>

        </div>

      </div>

    </ToolLayout>
  );
}