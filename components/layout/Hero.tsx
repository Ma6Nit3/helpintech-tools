export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f7ff] via-[#fafcff] to-[#eef4ff]">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-violet-200/30 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28">

        <div className="max-w-5xl">

          <div className="inline-flex items-center px-5 py-2 rounded-full border border-violet-200 bg-white/80 text-sm text-violet-700 shadow-sm backdrop-blur hover:bg-white transition duration-200">
            Modern Open Source Utilities Platform
          </div>


          <h1 className="mt-8 text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-zinc-950">

            All Your{" "}

            <span className="bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              IT & Developer Tools
            </span>{" "}

            In One Place

          </h1>


          <p className="mt-8 text-2xl leading-relaxed text-zinc-700 max-w-4xl">
            Powerful online tools for developers, cybersecurity professionals,
            Linux engineers, networking teams, and IT administrators.
          </p>


          <div className="mt-12 flex flex-wrap gap-5">

            <button className="px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 hover:scale-[1.02] transition duration-200 shadow-xl">
              Explore Tools
            </button>

            <button className="px-8 py-4 rounded-2xl border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 hover:border-violet-300 transition duration-200 font-semibold shadow-sm">
              Browse Categories
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}