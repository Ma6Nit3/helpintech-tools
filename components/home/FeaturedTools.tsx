import Link from "next/link";

const featuredTools = [
  {
    name: "JSON Formatter",
    href: "/tools/json-formatter",
    description: "Format, validate and beautify JSON instantly.",
  },
  {
    name: "DNS Lookup",
    href: "/tools/dns-lookup",
    description: "Lookup DNS records quickly.",
  },
  {
    name: "Password Generator",
    href: "/tools/password-generator",
    description: "Generate secure passwords instantly.",
  },
  {
    name: "IP Lookup",
    href: "/tools/ip-lookup",
    description: "Get IP geolocation and network information.",
  },
];

export default function FeaturedTools() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="text-violet-600 font-semibold uppercase">
            Most Popular
          </div>

          <h2 className="mt-4 text-5xl font-black text-zinc-950">
            Featured Tools
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-3xl bg-white border border-zinc-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-xl font-bold text-zinc-900">
                {tool.name}
              </h3>

              <p className="mt-3 text-zinc-600 text-sm leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}