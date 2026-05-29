export default function PlatformStats() {
  const stats = [
    { value: "15+", label: "Tools" },
    { value: "4", label: "Categories" },
    { value: "100%", label: "Free" },
    { value: "Open", label: "Source" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white border border-zinc-200 p-8 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl font-black text-violet-600">
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