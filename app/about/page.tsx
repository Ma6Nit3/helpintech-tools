import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7ff] via-[#fafcff] to-[#eef4ff]">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-4xl">

          <div className="text-sm font-semibold uppercase tracking-wider text-violet-600">
            About HelpInTech
          </div>

          <h1 className="mt-4 text-6xl font-black tracking-tight text-zinc-950 leading-tight">
            One Platform For Modern IT Utilities
          </h1>

          <p className="mt-8 text-2xl leading-relaxed text-zinc-700">
            HelpInTech is an open-source utilities platform designed for
            developers, networking engineers, Linux administrators,
            cybersecurity professionals, and DevOps teams.
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="rounded-[32px] bg-white border border-zinc-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900">
              Our Mission
            </h2>

            <p className="mt-4 text-zinc-700 leading-relaxed">
              To provide a free, fast, and modern platform that brings
              commonly used IT utilities into one place.
            </p>
          </div>

          <div className="rounded-[32px] bg-white border border-zinc-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900">
              Open Source
            </h2>

            <p className="mt-4 text-zinc-700 leading-relaxed">
              We believe essential developer and infrastructure tools
              should be accessible to everyone without subscriptions
              or vendor lock-in.
            </p>
          </div>

          <div className="rounded-[32px] bg-white border border-zinc-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900">
              Privacy First
            </h2>

            <p className="mt-4 text-zinc-700 leading-relaxed">
              HelpInTech aims to process as much data as possible in the
              browser and avoid storing user information unnecessarily.
            </p>
          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="rounded-[40px] bg-white border border-zinc-200 p-12 shadow-sm">

          <h2 className="text-4xl font-black text-zinc-950">
            Tool Categories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

            <Link
              href="/developer-tools"
              className="rounded-2xl border border-zinc-200 p-6 hover:bg-violet-50 transition"
            >
              <div className="font-bold text-zinc-900">
                Developer Tools
              </div>

              <div className="mt-2 text-zinc-600">
                JSON, Regex, HTML, Markdown and more.
              </div>
            </Link>

            <Link
              href="/security-tools"
              className="rounded-2xl border border-zinc-200 p-6 hover:bg-violet-50 transition"
            >
              <div className="font-bold text-zinc-900">
                Security Tools
              </div>

              <div className="mt-2 text-zinc-600">
                JWT, Passwords, Hashing utilities.
              </div>
            </Link>

            <Link
              href="/networking-tools"
              className="rounded-2xl border border-zinc-200 p-6 hover:bg-violet-50 transition"
            >
              <div className="font-bold text-zinc-900">
                Networking Tools
              </div>

              <div className="mt-2 text-zinc-600">
                DNS, WHOIS, IP and diagnostics.
              </div>
            </Link>

            <Link
              href="/linux-devops-tools"
              className="rounded-2xl border border-zinc-200 p-6 hover:bg-violet-50 transition"
            >
              <div className="font-bold text-zinc-900">
                Linux & DevOps
              </div>

              <div className="mt-2 text-zinc-600">
                Cron, YAML, automation and infrastructure.
              </div>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}