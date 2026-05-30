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


<div className="mt-12 max-w-2xl">

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    <div className="rounded-2xl bg-white/70 border border-white p-4 backdrop-blur">
      <div className="text-2xl font-black text-zinc-900">20+</div>
      <div className="text-sm text-zinc-600">Tools</div>
    </div>

    <div className="rounded-2xl bg-white/70 border border-white p-4 backdrop-blur">
      <div className="text-2xl font-black text-zinc-900">100%</div>
      <div className="text-sm text-zinc-600">Free</div>
    </div>

    <div className="rounded-2xl bg-white/70 border border-white p-4 backdrop-blur">
      <div className="text-2xl font-black text-zinc-900">0</div>
      <div className="text-sm text-zinc-600">Signup Required</div>
    </div>

    <div className="rounded-2xl bg-white/70 border border-white p-4 backdrop-blur">
      <div className="text-2xl font-black text-zinc-900">OSS</div>
      <div className="text-sm text-zinc-600">Open Source</div>
    </div>

  </div>

</div>

        </div>

      </div>

    </section>
  );
}