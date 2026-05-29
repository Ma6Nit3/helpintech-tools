import Link from "next/link";
import { tools } from "@/data/tools";

export default function LinuxDevOpsToolsPage() {

  const devopsTools = tools.filter(
    (tool) => tool.category === "Linux & DevOps"
  );

  return (

    <main className="min-h-screen bg-gradient-to-b from-[#f5f7ff] via-[#fafcff] to-[#eef4ff]">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-4xl">

          <div className="text-sm font-semibold tracking-wider uppercase text-violet-600">
            Linux & DevOps Utilities
          </div>

          <h1 className="mt-4 text-6xl font-black tracking-tight text-zinc-950 leading-tight">
            Linux & DevOps Tools
          </h1>

          <p className="mt-6 text-2xl leading-relaxed text-zinc-700">
            Explore cron generators, YAML validators,
            DevOps utilities, Linux-focused tools,
            automation helpers, and infrastructure utilities.
          </p>

        </div>


        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {devopsTools.map((tool, index) => (

            <Link
              key={index}
              href={`/tools/${tool.slug}`}
              className="group rounded-[32px] border border-zinc-200 bg-white/80 backdrop-blur p-8 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-violet-200 transition duration-300"
            >

              <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
                {tool.category}
              </div>


              <h2 className="mt-5 text-3xl font-bold text-zinc-900 group-hover:text-violet-700 transition duration-200">
                {tool.title}
              </h2>


              <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                {tool.description}
              </p>


              <div className="mt-8 inline-flex items-center text-violet-700 font-semibold group-hover:translate-x-1 transition duration-200">
                Open Tool →
              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}