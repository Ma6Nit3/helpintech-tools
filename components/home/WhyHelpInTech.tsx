export default function WhyHelpInTech() {
  const items = [
    {
      title: "Free Forever",
      description:
        "Most utilities are available free without subscriptions.",
    },
    {
      title: "Privacy First",
      description:
        "Many tools process data locally in your browser.",
    },
    {
      title: "Open Source Vision",
      description:
        "Built for developers, IT professionals, and infrastructure teams.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <div className="text-violet-600 font-semibold uppercase">
            Why HelpInTech
          </div>

          <h2 className="mt-4 text-5xl font-black text-zinc-950">
            Built For Modern IT Teams
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white border border-zinc-200 p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-zinc-900">
                {item.title}
              </h3>

              <p className="mt-4 text-zinc-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}