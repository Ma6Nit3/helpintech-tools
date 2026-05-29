export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7ff] via-[#fafcff] to-[#eef4ff]">

      <section className="max-w-4xl mx-auto px-6 py-24">

        <div className="rounded-[40px] bg-white border border-zinc-200 p-12 shadow-sm">

          <div className="text-sm font-semibold uppercase tracking-wider text-violet-600">
            Legal
          </div>

          <h1 className="mt-4 text-5xl font-black text-zinc-950">
            Privacy Policy
          </h1>

          <p className="mt-4 text-zinc-600">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="mt-10 space-y-8 text-zinc-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                Introduction
              </h2>

              <p>
                HelpInTech respects your privacy. This Privacy Policy
                explains how we collect, use, and protect information
                when you use our website and tools.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                Information We Collect
              </h2>

              <p>
                Most tools process information directly in your browser.
                We do not intentionally collect personal information
                unless you voluntarily provide it through contact forms
                or communications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                Analytics
              </h2>

              <p>
                We may use analytics services such as Google Analytics
                to understand website usage, improve performance, and
                enhance user experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                Cookies
              </h2>

              <p>
                Cookies may be used to improve functionality, remember
                preferences, and analyze website traffic.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                Third-Party Services
              </h2>

              <p>
                Some tools may integrate with third-party APIs and
                services. Their privacy policies may apply when those
                services are used.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                Contact
              </h2>

              <p>
                If you have questions regarding this Privacy Policy,
                please contact us through the HelpInTech contact page.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}