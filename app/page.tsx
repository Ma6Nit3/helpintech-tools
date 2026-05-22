export default function HelpInTechTools() {
  const tools = [
    {
      title: "Crontab Generator",
      description: "Generate Linux cron expressions easily with human readable schedules.",
      category: "Linux",
      icon: "⏰",
    },
    {
      title: "SSL Checker",
      description: "Check SSL certificate validity, issuer, and expiry instantly.",
      category: "Security",
      icon: "🔒",
    },
    {
      title: "Docker Compose Generator",
      description: "Create production-ready docker-compose.yml files quickly.",
      category: "Docker",
      icon: "🐳",
    },
    {
      title: "Systemd Service Generator",
      description: "Generate systemd service files for Linux applications.",
      category: "Linux",
      icon: "⚙️",
    },
    {
      title: "Subnet Calculator",
      description: "Calculate CIDR ranges, IP classes, gateways, and usable hosts.",
      category: "Networking",
      icon: "🌐",
    },
    {
      title: "JWT Decoder",
      description: "Decode and inspect JWT tokens securely in your browser.",
      category: "Security",
      icon: "🔑",
    },
    {
      title: "DNS Lookup Tool",
      description: "Lookup A, MX, TXT, SPF, DKIM, and DMARC DNS records.",
      category: "DNS",
      icon: "📡",
    },
    {
      title: "Nginx Config Generator",
      description: "Generate optimized Nginx virtual host configurations.",
      category: "Web Server",
      icon: "🚀",
    },
    {
      title: "PostgreSQL Query Formatter",
      description: "Format and beautify PostgreSQL queries for readability.",
      category: "Database",
      icon: "🗄️",
    },
    {
      title: "Linux Permission Calculator",
      description: "Convert chmod numeric values into symbolic permissions.",
      category: "Linux",
      icon: "🛡️",
    },
    {
      title: "Kubernetes YAML Generator",
      description: "Generate deployment, service, and ingress YAML templates.",
      category: "Kubernetes",
      icon: "☸️",
    },
    {
      title: "Base64 Encoder/Decoder",
      description: "Encode or decode Base64 strings instantly.",
      category: "Utilities",
      icon: "📦",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 sticky top-0 bg-zinc-950/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              HelpInTech Tools
            </h1>
            <p className="text-sm text-zinc-400">
              Free Linux & DevOps Utilities
            </p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
            <a href="#tools" className="hover:text-white transition">
              Tools
            </a>
            <a href="#categories" className="hover:text-white transition">
              Categories
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 mb-6">
              🚀 Free DevOps Tools Platform
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Free Linux & DevOps Tools For Engineers
            </h2>

            <p className="text-zinc-400 text-lg mt-6 leading-relaxed max-w-xl">
              Generate configs, debug infrastructure, validate SSL, analyze networking,
              and simplify DevOps workflows with powerful free online tools.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#tools"
                className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
              >
                Explore Tools
              </a>

              <a
                href="#categories"
                className="px-6 py-3 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition"
              >
                Browse Categories
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-zinc-500 text-sm mt-1">Planned Tools</div>
              </div>

              <div>
                <div className="text-3xl font-bold">100% Free</div>
                <div className="text-zinc-500 text-sm mt-1">No Signup Required</div>
              </div>

              <div>
                <div className="text-3xl font-bold">SEO Ready</div>
                <div className="text-zinc-500 text-sm mt-1">Google Optimized</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>

            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-lg font-semibold">Popular Tools</div>
                  <div className="text-zinc-500 text-sm mt-1">
                    Most used utilities this week
                  </div>
                </div>

                <div className="text-green-400 text-sm">● Live</div>
              </div>

              <div className="space-y-4">
                {tools.slice(0, 5).map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{tool.icon}</div>

                      <div>
                        <div className="font-medium">{tool.title}</div>
                        <div className="text-sm text-zinc-500">
                          {tool.category}
                        </div>
                      </div>
                    </div>

                    <button className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm transition">
                      Open
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-3xl font-bold">Categories</h3>
            <p className="text-zinc-500 mt-2">
              Explore tools by infrastructure category.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Linux",
            "Docker",
            "Networking",
            "Security",
            "Kubernetes",
            "Database",
          ].map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition cursor-pointer text-center"
            >
              <div className="text-lg font-semibold">{category}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="tools" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h3 className="text-4xl font-bold">Developer Tools</h3>
            <p className="text-zinc-500 mt-2">
              Fast, clean, and production-focused utilities.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search tools..."
            className="px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none focus:border-zinc-600 w-full md:w-80"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-700 hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">{tool.icon}</div>

                <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300">
                  {tool.category}
                </span>
              </div>

              <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                {tool.title}
              </h4>

              <p className="text-zinc-500 leading-relaxed text-sm">
                {tool.description}
              </p>

              <button className="mt-6 w-full py-3 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] transition">
                Launch Tool
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold leading-tight">
                Built For Linux Admins, DevOps Engineers & Developers
              </h3>

              <p className="text-zinc-400 mt-6 leading-relaxed text-lg">
                HelpInTech Tools is a growing collection of free utilities designed to simplify infrastructure management, server administration, networking, Docker workflows, SSL validation, and cloud operations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
                <div className="text-3xl font-bold">Fast</div>
                <p className="text-zinc-500 text-sm mt-2">
                  Lightweight tools optimized for speed.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
                <div className="text-3xl font-bold">Secure</div>
                <p className="text-zinc-500 text-sm mt-2">
                  Browser-based processing wherever possible.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
                <div className="text-3xl font-bold">Free</div>
                <p className="text-zinc-500 text-sm mt-2">
                  Accessible tools for every engineer.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
                <div className="text-3xl font-bold">SEO Ready</div>
                <p className="text-zinc-500 text-sm mt-2">
                  Structured for Google search growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xl font-bold">HelpInTech Tools</div>
            <div className="text-zinc-500 text-sm mt-2">
              © 2026 HelpInTech Cloud. All rights reserved.
            </div>
          </div>

          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

