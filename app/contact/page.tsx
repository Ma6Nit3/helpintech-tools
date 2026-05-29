export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7ff] via-[#fafcff] to-[#eef4ff]">

      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="text-center">

          <div className="text-sm font-semibold uppercase tracking-wider text-violet-600">
            Get In Touch
          </div>

          <h1 className="mt-4 text-5xl md:text-6xl font-black text-zinc-950">
            Contact HelpInTech
          </h1>

          <p className="mt-6 text-xl text-zinc-700 max-w-3xl mx-auto">
            Have a bug report, feature request, partnership inquiry,
            or tool suggestion? We'd love to hear from you.
          </p>

        </div>


        <div className="mt-16 rounded-[40px] bg-white border border-zinc-200 p-10 shadow-sm">

          <form className="space-y-6">

            <div>

              <label className="block mb-2 font-medium text-zinc-800">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-zinc-900 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition"
              />

            </div>


            <div>

              <label className="block mb-2 font-medium text-zinc-800">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-zinc-900 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition"
              />

            </div>


            <div>

              <label className="block mb-2 font-medium text-zinc-800">
                Subject
              </label>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-zinc-900 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition"
              />

            </div>


            <div>

              <label className="block mb-2 font-medium text-zinc-800">
                Message
              </label>

              <textarea
                rows={8}
                placeholder="Tell us how we can help..."
                className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-zinc-900 outline-none resize-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition"
              />

            </div>


            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 transition duration-200"
            >
              Send Message
            </button>

          </form>

        </div>


        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <div className="rounded-3xl bg-white border border-zinc-200 p-6 text-center shadow-sm">

            <div className="text-lg font-bold text-zinc-900">
              Tool Requests
            </div>

            <p className="mt-2 text-zinc-600">
              Suggest new tools for HelpInTech.
            </p>

          </div>


          <div className="rounded-3xl bg-white border border-zinc-200 p-6 text-center shadow-sm">

            <div className="text-lg font-bold text-zinc-900">
              Bug Reports
            </div>

            <p className="mt-2 text-zinc-600">
              Report issues and platform bugs.
            </p>

          </div>


          <div className="rounded-3xl bg-white border border-zinc-200 p-6 text-center shadow-sm">

            <div className="text-lg font-bold text-zinc-900">
              Partnerships
            </div>

            <p className="mt-2 text-zinc-600">
              Discuss collaborations and integrations.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}