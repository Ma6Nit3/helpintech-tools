export default function Roadmap() {
  const roadmap = [
    "WHOIS Lookup",
    "SSL Checker",
    "CIDR Calculator",
    "YAML Validator",
    "Docker Compose Builder",
    "Subnet Calculator",
  ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-[40px] bg-gradient-to-r from-violet-600 to-blue-600 p-12 text-white">

          <div className="text-sm uppercase tracking-wider">
            Coming Soon
          </div>

          <h2 className="mt-4 text-5xl font-black">
            Product Roadmap
          </h2>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {roadmap.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 border border-white/20 p-4"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}