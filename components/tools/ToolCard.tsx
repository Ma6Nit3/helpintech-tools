import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  category: string;
  icon: string;
  slug?: string;
};

export default function ToolCard({
  title,
  description,
  category,
  icon,
  slug,
}: ToolCardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-700 hover:-translate-y-1 transition duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="text-4xl">{icon}</div>

        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300">
          {category}
        </span>
      </div>

      <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
        {title}
      </h4>

      <p className="text-zinc-500 leading-relaxed text-sm">
        {description}
      </p>

      <Link
        href={slug ? `/tools/${slug}` : "#"}
        className="mt-6 block text-center w-full py-3 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] transition"
      >
        Launch Tool
      </Link>
    </div>
  );
}