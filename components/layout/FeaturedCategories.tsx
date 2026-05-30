const categories = [
  {
    title: "Developer Tools",
    description:
      "JSON formatting, JWT decoding, Base64, regex, URL encoding, and more.",
    tools: ["JSON Formatter", "JWT Decoder", "Base64 Tool"],
  },

  {
    title: "Networking",
    description:
      "DNS lookup, WHOIS, IP utilities, CIDR calculators, and diagnostics.",
    tools: ["DNS Lookup", "WHOIS", "IP Lookup"],
  },

  {
    title: "Cybersecurity",
    description:
      "SSL checkers, hashing tools, headers analysis, and security utilities.",
    tools: ["SSL Checker", "Hash Generator", "JWT Decoder"],
  },

  {
    title: "Linux & DevOps",
    description:
      "Docker, cron generators, permissions tools, YAML validation, and more.",
    tools: [
  "Cron Generator",
  "YAML Validator",
  "Timestamp Converter",
],
  },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f7f8ff] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl">

          <div className="text-sm font-semibold tracking-wider uppercase text-violet-600">
            Categories
          </div>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-zinc-900">
            Explore Tools By Category
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-zinc-700">
            Browse modern utilities for developers, networking engineers,
            cybersecurity professionals, Linux administrators, and IT teams.
          </p>

        </div>


        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {categories.map((category, index) => (

            <a
              key={index}
              href="#tools"
              className="group block rounded-[32px] border border-zinc-200 bg-white/80 backdrop-blur p-10 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-violet-200 transition duration-300"
            >

              <h3 className="text-3xl font-bold text-zinc-900 group-hover:text-violet-700 transition duration-200">
                {category.title}
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                {category.description}
              </p>


              <div className="mt-8 flex flex-wrap gap-3">

                {category.tools.map((tool, toolIndex) => (

                  <div
                    key={toolIndex}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-50 to-blue-50 border border-violet-100 text-sm text-zinc-700 shadow-sm hover:shadow-md hover:border-violet-300 hover:bg-white transition duration-200"
                  >
                    {tool}
                  </div>

                ))}

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}