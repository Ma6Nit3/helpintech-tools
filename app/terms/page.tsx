export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7ff] via-[#fafcff] to-[#eef4ff]">

      <section className="max-w-4xl mx-auto px-6 py-24">

        <div className="rounded-[40px] bg-white border border-zinc-200 p-12 shadow-sm">

          <div className="text-sm font-semibold uppercase tracking-wider text-violet-600">
            Legal
          </div>

          <h1 className="mt-4 text-5xl font-black text-zinc-950">
            Terms of Service
          </h1>

          <p className="mt-4 text-zinc-600">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="mt-10 space-y-8 text-zinc-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                Acceptance of Terms
              </h2>

              <p>
                By accessing and using HelpInTech, you agree to comply
                with these Terms of Service and all applicable laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                Use of Services
              </h2>

              <p>
                HelpInTech provides online utilities and tools for
                educational, professional, and informational purposes.
                You agree not to misuse the platform or attempt to
                disrupt its operation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                No Warranty
              </h2>

              <p>
                All tools and services are provided "as is" without
                warranties of any kind. We do not guarantee accuracy,
                availability, or suitability for any specific purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                Limitation of Liability
              </h2>

              <p>
                HelpInTech shall not be liable for any direct,
                indirect, incidental, or consequential damages arising
                from the use of the platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                Third-Party Services
              </h2>

              <p>
                Some tools may rely on third-party APIs and services.
                HelpInTech is not responsible for the availability or
                behavior of those services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                Changes to Terms
              </h2>

              <p>
                These Terms of Service may be updated periodically.
                Continued use of the platform constitutes acceptance of
                any changes.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}