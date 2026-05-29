import Link from "next/link";

export default function Footer() {

  return (

    <footer className="border-t border-zinc-200 bg-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          <div>

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-black text-lg shadow-lg">
                HIT
              </div>

              <div>

                <div className="text-2xl font-black text-zinc-950">
                  HelpInTech
                </div>

                <div className="text-zinc-500">
                  Modern Utilities Platform
                </div>

              </div>

            </div>


            <p className="mt-6 text-zinc-600 leading-relaxed">
              Open source developer, networking,
              cybersecurity, Linux, and DevOps utilities platform.
            </p>

          </div>


          <div>

            <div className="text-lg font-bold text-zinc-900 mb-5">
              Developer
            </div>

            <div className="space-y-4">

              <Link
                href="/tools/json-formatter"
                className="block text-zinc-600 hover:text-violet-700 transition"
              >
                JSON Formatter
              </Link>

              <Link
                href="/tools/regex-tester"
                className="block text-zinc-600 hover:text-violet-700 transition"
              >
                Regex Tester
              </Link>

              <Link
                href="/tools/html-preview"
                className="block text-zinc-600 hover:text-violet-700 transition"
              >
                HTML Preview
              </Link>

            </div>

          </div>


          <div>

            <div className="text-lg font-bold text-zinc-900 mb-5">
              Networking
            </div>

            <div className="space-y-4">

              <Link
                href="/tools/dns-lookup"
                className="block text-zinc-600 hover:text-violet-700 transition"
              >
                DNS Lookup
              </Link>

              <Link
                href="/tools/ip-lookup"
                className="block text-zinc-600 hover:text-violet-700 transition"
              >
                IP Lookup
              </Link>

              <Link
                href="/tools/whois-lookup"
                className="block text-zinc-600 hover:text-violet-700 transition"
              >
                WHOIS Lookup
              </Link>

            </div>

          </div>


          <div>

            <div className="text-lg font-bold text-zinc-900 mb-5">
              Platform
            </div>

            <div className="space-y-4">

              <a
                href="https://github.com"
                target="_blank"
                className="block text-zinc-600 hover:text-violet-700 transition"
              >
                GitHub
              </a>

              <Link
                href="/tools"
                className="block text-zinc-600 hover:text-violet-700 transition"
              >
                All Tools
              </Link>

              <Link
                href="/"
                className="block text-zinc-600 hover:text-violet-700 transition"
              >
                Homepage
              </Link>
<Link
  href="/privacy"
  className="block text-zinc-600 hover:text-violet-700 transition"
>
  Privacy Policy
</Link>


<Link
  href="/terms"
  className="block text-zinc-600 hover:text-violet-700 transition"
>
  Terms of Service
</Link>

<Link
  href="/contact"
  className="block text-zinc-600 hover:text-violet-700 transition"
>
  Contact
</Link>
            </div>

          </div>

        </div>


        <div className="mt-20 pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="text-zinc-500">
            © 2026 HelpInTech. Open Source Utilities Platform.
          </div>

          <div className="text-zinc-500">
            Built for developers, Linux engineers, and IT professionals.
          </div>

        </div>

      </div>

    </footer>
  );
}