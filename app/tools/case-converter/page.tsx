"use client";

import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

export default function CaseConverter() {

  const [input, setInput] = useState("");

  const toCamelCase = (text: string) => {

    return text
      .toLowerCase()
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.toUpperCase()
      )
      .replace(/\s+/g, "");
  };

  const toPascalCase = (text: string) => {

    return text
      .replace(/(\w)(\w*)/g, (_, first, rest) =>
        first.toUpperCase() + rest.toLowerCase()
      )
      .replace(/\s+/g, "");
  };

  const toSnakeCase = (text: string) => {

    return text
      .toLowerCase()
      .replace(/\s+/g, "_");
  };

  const toKebabCase = (text: string) => {

    return text
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  const copyText = async (value: string) => {

    await navigator.clipboard.writeText(value);

    alert("Copied!");
  };

  const conversions = [
    {
      title: "UPPERCASE",
      value: input.toUpperCase(),
    },

    {
      title: "lowercase",
      value: input.toLowerCase(),
    },

    {
      title: "camelCase",
      value: toCamelCase(input),
    },

    {
      title: "PascalCase",
      value: toPascalCase(input),
    },

    {
      title: "snake_case",
      value: toSnakeCase(input),
    },

    {
      title: "kebab-case",
      value: toKebabCase(input),
    },
  ];

  return (

    <ToolLayout
      title="Case Converter"
      description="Convert text between uppercase, lowercase, camelCase, snake_case, and more."
    >

      <div>

        <div className="text-2xl font-bold text-zinc-900 mb-5">
          Input Text
        </div>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text here..."
          className="w-full h-56 bg-white/70 border border-zinc-200 rounded-[28px] p-6 outline-none text-zinc-900 shadow-sm focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition duration-200 resize-none"
        />

      </div>


      <div className="mt-16 grid md:grid-cols-2 gap-6">

        {conversions.map((item, index) => (

          <div
            key={index}
            className="rounded-[28px] border border-zinc-200 bg-gradient-to-b from-white to-violet-50/30 p-6 shadow-sm"
          >

            <div className="flex items-center justify-between mb-5">

              <div className="text-lg font-bold text-zinc-900">
                {item.title}
              </div>

              <button
                onClick={() => copyText(item.value)}
                className="px-5 py-2 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition duration-200"
              >
                Copy
              </button>

            </div>


            <textarea
              value={item.value}
              readOnly
              className="w-full h-32 bg-white border border-zinc-200 rounded-2xl p-4 text-zinc-900 shadow-sm resize-none"
            />

          </div>

        ))}

      </div>

    </ToolLayout>
  );
}