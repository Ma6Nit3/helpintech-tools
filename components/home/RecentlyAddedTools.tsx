import Link from "next/link";

const recentTools = [
  {
    title: "HTML Preview",
    slug: "/tools/html-preview",
  },
  {
    title: "Markdown Preview",
    slug: "/tools/markdown-preview",
  },
  {
    title: "Password Generator",
    slug: "/tools/password-generator",
  },
  {
    title: "UUID Generator",
    slug: "/tools/uuid-generator",
  },
];

export default function RecentlyAddedTools() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="text-violet-600 font-semibold uppercase">
              New Utilities
            </div>

            <h2 className="mt-2 text-4xl font-black text-zinc-950">
              Recently Added Tools
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {recentTools.map((tool) => (
            <Link
              key={tool.slug}
              href={tool.slug}
              className="rounded-3xl border border-zinc-200 p-6 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="font-bold text-zinc-900">
                {tool.title}
              </h3>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}