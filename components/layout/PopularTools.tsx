import Link from "next/link";
import { tools } from "@/data/tools";

export default function PopularTools() {

  const popularTools = tools.filter((tool) => tool.popular);

  return (
    <section
      id="tools"
      className="bg-gradient-to-b from-[#eef4ff] to-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl">

          <div className="text-sm font-semibold tracking-wider uppercase text-violet-600">
            Popular Tools
          </div>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-zinc-900">
            Most Used Utilities
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-zinc-700">
            Discover the most popular utilities used by developers,
            cybersecurity professionals, networking teams, and Linux engineers.
          </p>

        </div>


        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {popularTools.map((tool, index) => (

            <Link
              key={index}
              href={`/tools/${tool.slug}`}
              className="group rounded-[32px] border border-zinc-200 bg-white/80 backdrop-blur p-8 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-violet-200 transition duration-300"
            >

              <div className="text-sm font-semibold uppercase tracking-wide text-violet-600">
                {tool.category}
              </div>


              <h3 className="mt-5 text-3xl font-bold text-zinc-900 group-hover:text-violet-700 transition duration-200">
                {tool.title}
              </h3>


              <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                {tool.description}
              </p>


              <div className="mt-8 inline-flex items-center text-violet-700 font-semibold group-hover:translate-x-1 transition duration-200">
                Open Tool →
              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}