export default function PlatformStats() {
  const stats = [
    {
      value: "20+",
      label: "Developer & IT Tools",
    },
    {
      value: "100%",
      label: "Free To Use",
    },
    {
      value: "0",
      label: "Signup Required",
    },
    {
      value: "Open",
      label: "Source Project",
    },
  ];

  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl font-black bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                {stat.value}
              </div>

              <div className="mt-3 text-zinc-600">
                {stat.label}
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}